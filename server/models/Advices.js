const mongoose = require("mongoose");

const AdviceSchema = new mongoose.Schema({
  advice: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Advice", AdviceSchema);
