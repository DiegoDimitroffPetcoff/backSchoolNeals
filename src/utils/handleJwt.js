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

module.exports = tokenSign;