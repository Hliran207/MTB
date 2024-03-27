const express = require("express");
const router = express.Router();
const cors = require("cors");
const { registerUser, loginUser } = require("../controllers/authcontroller");
const reviewRoutes = require("./reviews");
const adviceRoutes = require("./advices");

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.post("/SignUp", (req, res) => registerUser(req, res));
router.post("/LogIn", (req, res) => loginUser(req, res));
router.use("/reviews", reviewRoutes);
router.use("/advice", adviceRoutes);
module.exports = router;
