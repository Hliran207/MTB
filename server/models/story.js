const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  Story: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("stories", StorySchema);
