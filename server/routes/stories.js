const express = require("express");
const router = express.Router();
const Story = require("../models/story");

router.get("/", async (req, res) => {
  try {
    const story = await Story.find();
    res.json(story);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const story = new Story({
    story: req.body.story,
  });

  try {
    const newStory = await story.save();
    res.status(201).json(newStory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
