const { getuser } = require("../authentication/auth");
const urlmodel=require("../model/url");

const shortId=require("shortid");

async function generateshortURL(req,res){
   const body =req.body;
   const short_Id=shortId();
   
   if(!body.url) res.end("please enter a URL");

   await urlmodel.create({
        SHORT_ID : short_Id,
        REDIRECTED_LINK : body.url,
        TOTALCLICKS : []
   })
   const userID=req.cookies.uid;
   const user=getuser(userID);
   return res.render("homepagge",{
        urls : short_Id,
        yourname : user.name
   })
}   

async function redireting(req,res){
    const id=req.params.id;

    const result  = await urlmodel.findOneAndUpdate({ SHORT_ID : id },{
        $push : {
            TOTALCLICKS : { visited :`${Date.now()}` }
        }
    });

    console.log(result);
    
    return res.redirect(result.REDIRECTED_LINK);
    
}

async function showclicks(req,res){
    const id=req.params.id;
    const result= await urlmodel.findOne({ SHORT_ID : id })
    const count=result.TOTALCLICKS.length;
    return res.end(`the times u visited this site is ${count}`)
}

module.exports={
    generateshortURL,
    redireting,
    showclicks
}