const mongoose = require("mongoose");
const { Schema } = mongoose;

const userChildSchema = new Schema({
  child_name:{
    type: String,
    required: true
  },
  emailChild: String,
  password: String,
  is_child: Boolean,
});

const UserChildModel = mongoose.model("User_Child", userChildSchema);

module.exports = UserChildModel;
