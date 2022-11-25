const mongoose = require("mongoose");

const Messages = new mongoose.Schema(
  {
    fromid: { type: Number , default: 0},
    toid: { type: Number , default: 0},
    content: { type: String , default: ''},
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Messages", Messages);