const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  school: {
    type: String,
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
  },
  social: {
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("profile", ProfileSchema);
