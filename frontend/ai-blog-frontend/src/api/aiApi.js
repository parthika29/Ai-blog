import axios from "axios";

export const generateBlog = (data) => {
  const token = localStorage.getItem("token"); // or cookies

  return axios.post(
    "https://ai-blog-1-rsz9.onrender.com/api/ai/generate",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
