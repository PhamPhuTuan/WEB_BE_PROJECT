const router = require("express").Router();
const Lichtiem = require("../models/Lichtiem");
const verify = require("../verifyToken");
// create Lichtiem
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      const newLichtiem = new Lichtiem(req.body);
      try {
        const savedLichtiem = await newLichtiem.save();
        res.status(201).json(savedLichtiem);
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
        const updatedLichtiem = await Lichtiem.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedLichtiem);
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
        await Lichtiem.findByIdAndDelete(req.params.id);
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
      const Lichtiem = await Lichtiem.findById(req.params.id);
      res.status(200).json(Lichtiem);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //get all Lichtiem
  router.get("/",verify,async (req,res)=>{
    if(req.user.isAdmin){
      try{
        const Lichtiem=await Lichtiem.find();
        res.status(200).json(Lichtiem)
      }catch(e){
        res.status(500).json(e);
      }

    }else{
      res.status(403).json("Ban khong co quyen")
    }
  })

  module.exports = router;