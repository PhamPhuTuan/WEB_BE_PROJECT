const mongoose = require("mongoose");

const News = new mongoose.Schema(
  {
    id: {type: String, require: true},
    title: { type: String, required: true},
    content: { type: String},
    img: { type: String },
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", News);