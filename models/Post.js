const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  text: {
    type: String,
    required: true
  },
  promptText: {
    type: String,
  },
  promptImages: {
    type: [String],
  },
  likeCount: {
    type: Number,
    default: 0
  },
  likes: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    },
  }],
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    },
    text: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("post", PostSchema);
