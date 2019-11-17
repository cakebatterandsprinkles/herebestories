const mongoose = require("mongoose");
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  website: {
    type: String,
    default: ''
  },
  country: {
    type: String,
    default: ''
  },
  age: {
    type: Number,
    default: 0
  },
  favoriteBooks: {
    type: String,
    default: ''
  },
  interests: {
    type: String,
    default: ''
  },
  moreInformation: {
    type: String,
    default: ''
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("profile", ProfileSchema);
