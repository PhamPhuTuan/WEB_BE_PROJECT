const mongoose = require("mongoose");

const Users = new mongoose.Schema(
  {
    id: { type: Number, required: true},
    username: {type: String},
    password: {type: String},
    fullname: { type: String},
    sex: { type: String},
    dob: { type: Date, default: Date.now },
    address: { type: String},
    avt: { type: String },
    phone: {type: String},
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", Users);