const User = require("../models/userParent");

//login
const loginUser = async (req, res) => {
  try {
    const { emailParent, password } = req.body;

    //check if user exist
    const user = await User.findOne({ emailParent });
    if (!user) {
      return res.json({
        error: "NO USER FOUND",
      });
    }
    //check if password match
    if (password.toLowerCase() === user.password.toLowerCase()) {
      res.json("password match");
    }
  } catch (error) {
    console.log("error");
  }
};

module.exports = {
  loginUser,
};
