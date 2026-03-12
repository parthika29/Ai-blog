const Blog = require("../models/Blog");

// Create blog (author only)
// exports.createBlog = async (req, res) => {
//   try {
//     const { title, content, isAIGenerated } = req.body;

//     const blog = await Blog.create({
//       title,
//       content,
//       author: req.user.id,
//       isAIGenerated,
//       status: "published"
//     });

//     res.status(201).json(blog);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
exports.createBlog = async (req, res) => {
  try {
    const { title, content, category, isAIGenerated } = req.body;

    const blog = await Blog.create({
      title,
      content,
      author: req.user.id,
      category,
      isAIGenerated,
      image: req.file ? req.file.path : null,
      status: "published"
    });

    res.status(201).json(blog);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all published blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ status: "published" }).populate("author", "email role").sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("author", "email role");
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update blog (author only)
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (blog.author.toString() !== req.user.id) return res.status(403).json({ message: "Unauthorized" });

    const { title, content, status } = req.body;

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.status = status || blog.status;

    await blog.save();

    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete blog (author only)
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (blog.author.toString() !== req.user.id) return res.status(403).json({ message: "Unauthorized" });

    await blog.deleteOne();
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
