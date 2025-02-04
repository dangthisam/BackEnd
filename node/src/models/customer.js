const mongoose = require("mongoose");
const customerUser = new mongoose.Schema(
  {
    name: String,
    phone: String,
    address: String,
    image: String,
    description: String,
  },
  { timestamps: true }
);
const cusUser = mongoose.model("customer", customerUser);
module.exports = cusUser;
