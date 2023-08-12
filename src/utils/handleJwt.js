const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require("../config.js/config");

const tokenSign = async (user)=>{
    return jwt.sign(
        {
            _id:user._id,
            role:user.role
        },
        JWT_SECRET,
        {
            expiresIn:"2h"
        }
        )
}

const verifyToken = async (token)=> {
   try {
    return jwt.verify(token,JWT_SECRET)
   } catch (e) {
    console.log("ERROR ENVIADO DESDE habdleJwt.js backend");
    console.log(e);
    return null
   } 
}
module.exports = {tokenSign, verifyToken}