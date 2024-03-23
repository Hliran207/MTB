const User = require("../models/userParent");
const User_Child = require("../models/userChild")

const registerUser = async (req, res) => {
  try {
    const { name, emailParent, emailChild, password, is_parent } = req.body;
    // check if name was enterd
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    // check if password was enterd
    if (!password || password.length < 6) {
      return res.json({
        error: "password is required and should be at least 6 characters long",
      });
    }
    // check if email was enterd and not exist
    const userObj = await User.findOne({ emailParent });
    if (userObj) {
      return res.json({
        error: "email is already taken",
      });
    }
    const user = await User.create({
      name,
      emailParent,
      emailChild,
      password,
      is_parent,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// register child:

const registerChildUser = async (req, res) => {
  try {
    const { name, emailChild, emailParent, password, is_child } = req.body;
    // check if name was enterd
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    // check if password was enterd
    if (!password || password.length < 6) {
      return res.json({
        error: "password is required and should be at least 6 characters long",
      });
    }
    // check if email was enterd and not exist
    const userObj = await User_Child.findOne({ emailChild });
    if (userObj) {
      return res.json({
        error: "email is already taken",
      });
    }
    const user = await User_Child.create({
      name,
      emailChild,
      emailParent,
      password,
      is_child,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};


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
    }else{
      return res.json({
        error: "password incorrect",
      });
    }
  } catch (error) {
    console.log("error");
  }
};

module.exports = {
  registerUser,
  registerChildUser,
  loginUser,
};
