const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  parent_name: String,
  emailParent: String,
  child_id: String,
  password: String,
  is_parent: Boolean,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
