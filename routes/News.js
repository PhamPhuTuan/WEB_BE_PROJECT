const router = require("express").Router();
const News = require("../models/News");
const verify = require("../verifyToken");
// Create
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newNews = new News(req.body);
      try {
        const savedNews = await newNews.save();
        res.status(201).json(savedNews);
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
    const updatedNews = await News.findByIdAndUpdate(
        req.params.id,
        {
        $set: req.body,
        },
        { new: true }
    );
    res.status(200).json(updatedNews);
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
    await News.findByIdAndDelete(req.params.id);
    res.status(200).json("Bai viet da bi xoa");
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
    const News = await News.findById(req.params.id);
    res.status(200).json(News);
} catch (err) {
    res.status(500).json(err);
}
});

//get all News
router.get("/",verify,async (req,res)=>{
    try{
    const News=await News.find();
    res.status(200).json(News)
    }catch(e){
    res.status(500).json(e);
    }
})

module.exports = router;
