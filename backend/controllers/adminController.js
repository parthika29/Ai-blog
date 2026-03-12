const Blog = require("../models/Blog");
const User = require("../models/User");

// Get all blogs (admin)
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "email role").sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Approve / Reject blog
exports.updateBlogStatus = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    blog.status = req.body.status; // draft / published
    await blog.save();

    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Manage users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
