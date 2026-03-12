const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { getAllBlogs, updateBlogStatus, getAllUsers } = require("../controllers/adminController");

router.get("/blogs", auth, role("admin"), getAllBlogs);
router.put("/blogs/:id", auth, role("admin"), updateBlogStatus);
router.get("/users", auth, role("admin"), getAllUsers);

module.exports = router;
