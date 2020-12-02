const mongoose = require("mongoose");

const motivationSchema = new mongoose.Schema({
  action: { type: String, required: true, unique: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model("Motivation", motivationSchema);
