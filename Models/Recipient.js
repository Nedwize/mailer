const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  fullName: String,
  opened: { type: Boolean, default: false },
  clicked: { type: Boolean, default: false },
});

module.exports = recipientSchema;
