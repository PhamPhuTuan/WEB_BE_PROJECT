const mongoose = require("mongoose");

const Vaccines = new mongoose.Schema(
  {
    id: { type: Number,},
    name: { type: String, default: '' },
    info: { type: String, default: ''},
    doituong: { type: String , default: ''},
    lichtiem: { type: String, default: '' },
    dieukientruoctien: { type: String, default: '' },
    phanungsautiem: { type: String, default: '' },
    gia: { type: String, default: '' },
    cauhoithuonggap: { type: String, default: '' },
    dangkythongtintiemchung: { type: String, default: '' },
    somuitheophacdo: { type: String, default: '' },
    nuocsx: { type: String, default: '' },
    inventory: { type: Boolean, default: true },
    phongbenhgi: { type: String, default: '' },
    goivaccine: {type: Number, default: 0}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vaccines", Vaccines);