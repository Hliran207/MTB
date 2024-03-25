const User = require("../models/userParent");
const User_Child = require("../models/userChild")

const registerUser = async (req, res) => {
  try {
    const { parent_name, child_name, emailParent, emailChild, password } = req.body;
    debugger;
    // check if name was enterd
    if (!parent_name || !child_name) {
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
    const userChildObj = await  User_Child.findOne({ emailChild });
    if (userObj || userChildObj) {
      return res.json({
        error: "email is already taken",
      });
    }
    const userChild = await User_Child.create({
      child_name,
      emailChild,
      // emailParent,
      password,
      is_child: true,
    });
    await User.create({
      parent_name,
      emailParent,
      child_id:userChild._id,
      password,
      is_parent: true,
    });
    
   

    return res.json(userChild);
  } catch (error) {
    console.log(error);
  }
};

// register child:

// const registerChildUser = async (req, res) => {
//   try {
//     const { name, emailChild, emailParent, password, is_child } = req.body;
//     // check if name was enterd
//     if (!name) {
//       return res.json({
//         error: "name is required",
//       });
//     }
//     // check if password was enterd
//     if (!password || password.length < 6) {
//       return res.json({
//         error: "password is required and should be at least 6 characters long",
//       });
//     }
//     // check if email was enterd and not exist
//     const userObj = await User_Child.findOne({ emailChild });
//     if (userObj) {
//       return res.json({
//         error: "email is already taken",
//       });
//     }
//     const user = await User_Child.create({
//       name,
//       emailChild,
//       emailParent,
//       password,
//       is_child,
//     });

//     return res.json(user);
//   } catch (error) {
//     console.log(error);
//   }
// };


//login
const loginUser = async (req, res) => {
  
  let user = null;
  try {
    const { email, password } = req.body;
    debugger;
    //check if user exist
    user = await User.findOne({emailParent: email,password});
    if (!user) {
      user = await User_Child.findOne({emailChild: email,password});
      if (!user) {
        return res.json({
          error: "NO USER FOUND",
        });
      }
    }

    //check if password match
    console.log(user, user.password);
    // if (password.toString() !== user.password) {
    //   return res.json({
    //     error: "password incorrect",
    //   });
    // }
    return res.json(user)
  } catch (error) {
    console.log("error");
  }
};

module.exports = {
  registerUser,
  // registerChildUser,
  loginUser,
};
