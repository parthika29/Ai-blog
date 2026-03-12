// const mongoose = require("mongoose");

// const blogSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   isAIGenerated: { type: Boolean, default: false },
//   category : {type: String, required:true},
//   status: { type: String, enum: ["draft", "published"], default: "draft" },
// }, { timestamps: true });

// module.exports = mongoose.model("Blog", blogSchema);

const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },

  content: { type: String, required: true },

  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  isAIGenerated: { type: Boolean, default: false },

  category: { type: String, required: true },

  image: {
    type: String
  },

  status: { 
    type: String, 
    enum: ["draft", "published"], 
    default: "draft" 
  }

}, { timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);