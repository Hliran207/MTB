const express = require('express');
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  registerChildUser,
  loginUser,
} = require("../controllers/authcontroller");
const reviewRoutes = require("./reviews");

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

module.exports = router;