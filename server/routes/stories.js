const express = require("express");
const router = express.Router();
const Story = require("../models/story");

router.get("/", async (req, res) => {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new story
router.post("/", async (req, res) => {
  const { newstory } = req.body; // Destructure 'newstory' from request body
  try {
    const createdStory = await Story.create({ newstory }); // Create new story directly with 'create' method
    res.status(201).json(createdStory);
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to create story", message: err.message });
  }
});
module.exports = router;
