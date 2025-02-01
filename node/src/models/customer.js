const mongoose = require("mongoose");
const customerUser = new mongoose.Schema({
  code: { type: String },
  name: String,
  address: String,
});
const user = mongoose.model("user", User);
module.exports = user;
