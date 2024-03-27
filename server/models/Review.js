const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  selected: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Review', ReviewSchema);