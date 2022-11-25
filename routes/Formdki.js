const router = require("express").Router();
const Formdki = require("../models/Formdki");
const verify = require("../verifyToken");
// create Formdki
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      const newFormdki = new Formdki(req.body);
      try {
        const savedFormdki = await newFormdki.save();
        res.status(201).json(savedFormdki);
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
        const updatedFormdki = await Formdki.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedFormdki);
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
        await Formdki.findByIdAndDelete(req.params.id);
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
      const Formdki = await Formdki.findById(req.params.id);
      res.status(200).json(Formdki);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //get all Formdki
  router.get("/",verify,async (req,res)=>{
    if(req.user.isAdmin){
      try{
        const Formdki=await Formdki.find();
        res.status(200).json(Formdki)
      }catch(e){
        res.status(500).json(e);
      }

    }else{
      res.status(403).json("Ban khong co quyen")
    }
  })

  module.exports = router;