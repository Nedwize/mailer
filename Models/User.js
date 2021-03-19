// Commenting to reset models folder in next commit

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: { type: String, required: true },
  refreshToken: { type: String, required: true },
  accessToken: { type: String, required: true },
  credits: { type: Number, default: 50 },
  email: { type: String, required: true },
  displayName: { type: String, required: true },
  photoURL: { type: String, required: true },
});

mongoose.model("users", userSchema);
