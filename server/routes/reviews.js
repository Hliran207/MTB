const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// POST a new review
router.post('/', async (req, res) => {
  try {
    const { review } = req.body;
    const newReview = new Review({ review });
    const savedReview = await newReview.save();
    res.json(savedReview);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;