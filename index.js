const express=require("express");
const app=express();
const PORT=9000;
const ejs=require("ejs");
const path=require("path");
const urlmodel=require("./model/url");


const DB=require("./config/config");
const urlrouter = require("./routes/url");
const staticrouter=require("./routes/staticrouter");
const userrouter=require("./routes/user");
const cookieParser = require("cookie-parser");
const authmiddle=require("./middlewares/authentication");
const {checkauth}=require("./middlewares/checkforname");


//conncetingg mongoose
DB.connectDB("mongodb://localhost:27017/urlshorterner");


 //HOMEPAGEG
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));




//middlewares

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());



//routes
app.use("/",checkauth,staticrouter);
app.use("/api",authmiddle.loginuseronly,urlrouter);
app.use("/user",userrouter);




app.listen(PORT,()=>{
    console.log("the server has started");
});
