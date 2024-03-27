const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  registerChildUser,
  loginUser,
} = require("../controllers/authcontroller");
const reviewRoutes = require("./reviews");
const adviceRoutes = require("./advices");

//middelware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.post("/SignUp", registerUser);
// router.post("/SignUpChild", registerChildUser);
router.post("/LogIn", loginUser);
router.use("/reviews", reviewRoutes);
router.use("/advice", adviceRoutes);
module.exports = router;
