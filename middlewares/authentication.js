
const {createmapuser,getuser}=require("../authentication/auth");

async function loginuseronly(req,res,next){
    
    const userid=req.cookies?.uid;
   
    if(!userid){
       return  res.redirect("/user/login");
    }
    

    const user=getuser(userid);

    if(!user){
       return  res.redirect("/user/login");
    }
    
    req.user=user;

    next();

}

module.exports={
    loginuseronly,
}