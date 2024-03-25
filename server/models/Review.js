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
});

<<<<<<< HEAD
module.exports = mongoose.model('Review', ReviewSchema);
=======
module.exports = mongoose.model('Review', ReviewSchema);
>>>>>>> reviewparent
