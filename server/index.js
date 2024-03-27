const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const reviewRoutes = require("../server/routes/reviews");
const adviceRoutes = require("../server/routes/advices");
const AdviceModel = require("./models/Advices");
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

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
