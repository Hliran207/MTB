const mongoose = require("mongoose");
const { Schema } = mongoose;

const userChildSchema = new Schema({
  name: String,
  emailChild: String,
  emailParent: String,
  password: String,
  is_child: Boolean,
});

const UserChildModel = mongoose.model("User_Child", userChildSchema);

module.exports = UserChildModel;
