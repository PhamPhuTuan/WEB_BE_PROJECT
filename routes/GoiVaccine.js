const router = require("express").Router();
const GoiVaccine = require("../models/GoiVaccine");
const verify = require("../verifyToken");
// create GoiVaccine
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      const newGoiVaccine = new GoiVaccine(req.body);
      try {
        const savedGoiVaccine = await newGoiVaccine.save();
        res.status(201).json(savedGoiVaccine);
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
        const updatedGoiVaccine = await GoiVaccine.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedGoiVaccine);
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
        await GoiVaccine.findByIdAndDelete(req.params.id);
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
      const GoiVaccine = await GoiVaccine.findById(req.params.id);
      res.status(200).json(GoiVaccine);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //get all GoiVaccine
  router.get("/",verify,async (req,res)=>{
    if(req.user.isAdmin){
      try{
        const GoiVaccine=await GoiVaccine.find();
        res.status(200).json(GoiVaccine)
      }catch(e){
        res.status(500).json(e);
      }

    }else{
      res.status(403).json("Ban khong co quyen")
    }
  })

  module.exports = router;