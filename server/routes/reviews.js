const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new review
router.post("/", async (req, res) => {
  const review = new Review({
    review: req.body.review,
  });
  try {
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update selected reviews
router.post("/setSelected", async (req, res) => {
  try {
    // Reset all reviews to unselected
    await Review.updateMany({}, { $set: { selected: false } });

    // Set selected reviews to true
    const selectedReviewIds = req.body.map(review => review._id);
    await Review.updateMany(
      { _id: { $in: selectedReviewIds } },
      { $set: { selected: true } }
    );

    res.status(200).json({ message: "Selected reviews updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;