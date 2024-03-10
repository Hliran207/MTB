const mongoose = require("mongoose");
const { Schema } = mongoose;

const userParentSchema = new Schema({
  name: String,
  emailParent: {
    type: String,
    unique: true,
  },
  emailChild: String,
  password: String,
});

const UserModel = mongoose.model("User", userParentSchema);

module.exports = UserModel;
