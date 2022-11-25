const router = require("express").Router();
const Vaccine = require("../models/Vaccines");
const verify = require("../verifyToken");
// create Vaccine
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      const newVaccine = new Vaccine(req.body);
      try {
        const savedVaccine = await newVaccine.save();
        res.status(201).json(savedVaccine);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("Bạn không được phép!");
    }
  });
  
  //UPDATE
  
  router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        const updatedVaccine = await Vaccine.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedVaccine);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("Bạn không được phép!");
    }
  });
  
  //DELETE
  
  router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        await Vaccine.findByIdAndDelete(req.params.id);
        res.status(200).json("Phim đã bị xóa ...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("Bạn không được phép!");
    }
  });
  
  //GET
  
  router.get("/find/:id", verify, async (req, res) => {
    try {
      const Vaccine = await Vaccine.findById(req.params.id);
      res.status(200).json(Vaccine);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //get all Vaccine
  router.get("/",verify,async (req,res)=>{
    if(req.user.isAdmin){
      try{
        const Vaccine=await Vaccine.find();
        res.status(200).json(Vaccine)
      }catch(e){
        res.status(500).json(e);
      }

    }else{
      res.status(403).json("Ban khong co quyen")
    }
  })

  module.exports = router;