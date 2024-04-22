const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: String,
  createdAt: {
    type: String,
    immutable: true,
  },
  username: String,
  phone: String,
  address: String,
  diet: {
    date: String,
    items: [{
      name:String,
      Carb:Number,
      Protein:Number,
      Fat:Number,
      Calories:Number,
    }],
  },
  resetPasswordToken: String,
  resetPasswordExpires: String,
});

module.exports = mongoose.model("users", UserSchema);
