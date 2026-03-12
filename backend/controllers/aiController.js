
const axios = require("axios");

exports.generateBlog = async (req, res) => {
  try {
    const { topic, tone = "formal", words = 200 } = req.body;

    if (!topic) {
      return res.status(400).json({ message: "Topic is required" });
    }

    const prompt = `Write a ${tone} blog of about ${words} words on the topic "${topic}".`;

    const response = await axios.post(
  "https://router.huggingface.co/v1/chat/completions",
  {
    model: "Qwen/Qwen3.5-27B",
    messages: [
      { role: "user", content: prompt }
    ],
    max_tokens: parseInt(words),
  },
  {
    headers: {
      Authorization: `Bearer ${process.env.HF_API_KEY}`,
      "Content-Type": "application/json",
    },
  }
);
    const content = response.data?.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No content generated");
    }

    res.json({ content });

  } catch (error) {
    console.error("HF AI ERROR:", error.response?.data || error.message);

    res.status(500).json({
      message: error.response?.data?.error || "AI generation failed",
    });
  }
};