const mongoose = require("mongoose");
const User = new mongoose.Schema({
  code: String,
  name: String,
  address: String,
});
const user = mongoose.model("user", User);
module.exports = user;
