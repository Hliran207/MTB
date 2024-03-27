const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const reviewRoutes = require("../server/routes/reviews");
const adviceRoutes = require("../server/routes/advices");
const AdviceModel = require("./models/Advices");
const ReviewModel = require("./models/Review");
const Advices = require("./models/Advices");
const app = express();

// Database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch(() => console.log("Database Not Connected"));

// CORS configuration
const allowedOrigins = ["http://localhost:5173"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow credentials (cookies, etc.)
  })
);

// Middleware
app.use(express.json());
app.use("/api/reviews", reviewRoutes);
app.use("/api/advice", adviceRoutes);
app.use("/", require("./routes/authRoutes"));

app.delete("/deleteAdvice/:id", (req, res) => {
  const id = req.params.id;
  AdviceModel.findByIdAndDelete(id)
    .then(() => res.json({ message: "Advice deleted successfully" }))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/", (req, res) => {
  AdviceModel.find({})
    .then((advices) => res.json(advices))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/api/reviews", (req, res) => {
  ReviewModel.find({})
    .then((reviews) => res.json(reviews))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.get('/api/reviews/selected', async (req, res) => {
  try {
    // Find all reviews that are selected in the database
    const selectedReviews = await ReviewModel.find({ selected: true });
    res.json(selectedReviews); // Send the selected reviews as the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' }); // In case of error, send a 500 error
  }
});

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));