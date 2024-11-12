const express=require("express");
const router=express.Router();
const urlcontroller=require("../controller/url");

router.post("/url",urlcontroller.generateshortURL);

router.get("/url/:id",urlcontroller.redireting);
router.get("/estimate/:id",urlcontroller.showclicks);

module.exports=router;