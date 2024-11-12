const usermodel=require("../model/user");
const {getuser}=require("../authentication/auth")

async function checkauth(req,res,next) {
    const userid=req.cookies?.uid;
    const user=getuser(userid);
    req.user=user;
    console.log("the user at the checkforname middleawre is",req.user);
    next()
}

module.exports={checkauth};