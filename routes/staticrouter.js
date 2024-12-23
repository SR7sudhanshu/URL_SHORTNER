const express=require('express');
const cookieParser=require("cookie-parser");
const router=express.Router();

router.get("/",(req,res)=>{
    if(!req.user)
    res.render("homepagge");

    else{
        res.render("homepagge",{
            yourname : req.user.name
        })
    }
 })

router.get("/user",(req,res)=>{
    res.render("signup");
})

router.get("/user/login",(req,res)=>{
    res.render("login");
})


 module.exports=router;