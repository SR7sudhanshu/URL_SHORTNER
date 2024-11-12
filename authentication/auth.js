const jwt=require("jsonwebtoken");
const secretkey="Sr7123456@";

function createmapuser(user){
    const payload={
        name : user.name,
        email : user.email,
        id : user._id,
    }
    return jwt.sign(payload,secretkey);
}

//map jaisa agar token wrongg h toh NULL return hoga

function getuser(id){
    // if(!id) return null;
    try {
        return jwt.verify(id,secretkey);  //if not found sends error
    } catch (err) {
        return null;
    }
}

module.exports={
    createmapuser,
    getuser,
}