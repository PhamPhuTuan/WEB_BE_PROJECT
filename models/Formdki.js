const mongoose = require("mongoose");

const Formdki = new mongoose.Schema(
  {
    id: { type: Number, required: true},
    userid: {type: Number},
    vaccineid: { type: Number},
    goivaccineid: {type: Number},
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Formdki", Formdki);