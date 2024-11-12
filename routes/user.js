const express=require("express");
const router=express.Router();
const { signupfunction,loginuser }=require("../controller/user")

router.post("/",signupfunction);

router.post("/login",loginuser);

module.exports=router;