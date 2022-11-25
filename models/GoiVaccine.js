const mongoose = require("mongoose");

const GoiVaccine = new mongoose.Schema(
  {
    id: { type: Number, default: 0 },
    name: { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model("GoiVaccine", GoiVaccine);