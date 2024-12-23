const { time, timeStamp } = require("console");
const mongoose=require("mongoose");

const urlschema=new mongoose.Schema({
    SHORT_ID :{type : String,
        required : true,
        unique : true
    },
    REDIRECTED_LINK : {
        type: String,
        required : true,
    },
    TOTALCLICKS : [{visited : {type : Number}}]
},{timestamps : true});

const urlmodel=mongoose.model("urlmodel",urlschema);

module.exports=urlmodel;