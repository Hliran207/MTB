const express = require("express");
const router = express.Router();
const Advice = require("../models/Advices");

router.get("/", async (req, res) => {
  try {
    const advice = await advice.find();
    res.json(advice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const advice = new Advice({
    advice: req.body.advice,
  });

  try {
    const newAdvice = await advice.save();
    res.status(201).json(newAdvice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
