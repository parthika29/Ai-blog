const express = require("express");
const upload = require("../middleware/upload");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog } = require("../controllers/blogController");

//router.post("/", auth,  createBlog);
router.post("/", auth, upload.single("image"), createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.put("/:id", auth, role("author"), updateBlog);  // see role(author) if any error
router.delete("/:id", auth, role("author"), deleteBlog);

module.exports = router;
