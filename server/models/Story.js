const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  story: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Story", StorySchema);
