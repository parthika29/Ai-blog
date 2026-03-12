const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const limiter = require("../middleware/rateLimiter");
const { generateBlog } = require("../controllers/aiController");

router.post("/generate", auth, limiter, generateBlog);

module.exports = router;
