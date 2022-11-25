const router = require("express").Router();
const Message = require("../models/Message");
const verify = require("../verifyToken");
// create Message
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      const newMessage = new Message(req.body);
      try {
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
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
        const updatedMessage = await Message.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedMessage);
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
        await Message.findByIdAndDelete(req.params.id);
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
      const Message = await Message.findById(req.params.id);
      res.status(200).json(Message);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //get all Message
  router.get("/",verify,async (req,res)=>{
    if(req.user.isAdmin){
      try{
        const Message=await Message.find();
        res.status(200).json(Message)
      }catch(e){
        res.status(500).json(e);
      }

    }else{
      res.status(403).json("Ban khong co quyen")
    }
  })

  module.exports = router;