const express = require("express");
const router = express.Router();
const cors = require("cors");
const { loginUser } = require("../controllers/authcontroller");

//middelware

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.post("/LogIn", loginUser);
module.exports = router;
