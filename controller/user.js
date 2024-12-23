const usermodel=require("../model/user");
const sessioinIDmap=require("../authentication/auth");
const cookieparser=require("cookie-parser");

const { v4: uuidv4 } = require('uuid');

async function signupfunction(req,res) {
    const { name,email,password}=req.body;

    await usermodel.create({
        name,
        email,
        password
    })

    res.redirect("/user/login");
}

async function loginuser(req,res) {
    const{ email , password}=req.body;

    const user = await usermodel.findOne({ email , password });
    
    if(!user){
        return res.redirect("/user/login");
    }
    
    
    const token=sessioinIDmap.createmapuser(user);  //token created
   
    res.cookie("uid",token);
    
    return res.redirect("/");
    
}    

    
module.exports={
    signupfunction,
    loginuser,
}

