const sendMail = require("../routes/emailService"); // Import the sendMail function
const User = require("../models/userParent");
const User_Child = require("../models/userChild");

const registerUser = async (req, res) => {
  try {
    const { parent_name, child_name, emailParent, emailChild, password } =
      req.body;

    // בדיקה אם נכנסו שם הורה ושם ילד
    if (!parent_name || !child_name) {
      return res.json({ error: "יש להזין שם להורה ולילד" });
    }

    // בדיקה אם נכנסה סיסמה תקינה
    if (!password || password.length < 6) {
      return res.json({ error: "יש להזין סיסמה בעלת לפחות 6 תווים" });
    }

    // בדיקה אם האימייל כבר קיים במערכת
    const userObj = await User.findOne({ emailParent });
    const userChildObj = await User_Child.findOne({ emailChild });
    if (userObj || userChildObj) {
      return res.json({ error: "האימייל כבר קיים במערכת" });
    }

    // יצירת משתמש ילד ומשתמש הורה חדשים
    const userChild = await User_Child.create({
      child_name,
      emailChild,
      password,
      is_child: true,
    });
    await User.create({
      parent_name,
      emailParent,
      child_id: userChild._id,
      password,
      is_parent: true,
    });
    return res.json(userChild);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "שגיאה ברישום משתמש" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("בודק את המשתמש:", email);

    let user = await User.findOne({ emailParent: email, password });

    if (!user) {
      user = await User_Child.findOne({ emailChild: email, password });

      if (!user) {
        console.log("לא נמצא משתמש");
        return res.json({ error: "משתמש לא נמצא" });
      } else {
        console.log("מצאנו משתמש ילד:", user);
        const parentUser = await User.findOne({ child_id: user._id });

        if (parentUser) {
          const parentEmail = parentUser.emailParent;
          console.log("אימייל ההורה:", parentEmail);
          console.log("שולחים אימייל להורה...");
          await sendMail(parentEmail, user.child_name);
          console.log("האימייל נשלח להורה");
        } else {
          console.log("לא נמצא הורה למשתמש הילד הזה");
        }
      }
    }

    console.log("המשתמש מאומת:", user);
    return res.json(user);
  } catch (error) {
    console.log("שגיאה", error);
    return res.status(500).json({ error: "שגיאה בהתחברות משתמש" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
