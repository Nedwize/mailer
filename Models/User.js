// Commenting to reset models folder in next commit

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 50 },
});

mongoose.model("users", userSchema);
