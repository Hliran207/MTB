const mongoose = require("mongoose");
const { Schema } = mongoose;

const userParentSchema = new Schema({
  name: String,
  emailParent: String,
  emailChild: String,
  password: String,
  is_parent: Boolean,
});

const UserModel = mongoose.model("User", userParentSchema);

module.exports = UserModel;
