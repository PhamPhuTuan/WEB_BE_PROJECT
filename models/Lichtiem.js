const mongoose = require("mongoose");

const Lichtiem = new mongoose.Schema(
  {
    doituong: { type: String , default: ''},
    tenvacvine: { type: String, default: '' },
    thoigian: { type: String, default: '' }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lichtiem", Lichtiem);