const User = require("../DBS/mongoose/models/user");
const mongoose = require("mongoose");
const {compare} = require("../utils/handleBcrypt");
const tokenSign = require("../utils/handleJwt");


getAuthUser = async (data) => {
const { nickname, password } = data;

try {
  const user = await User.findOne({ nickname});
  if (user) {
    let checkPassword = await compare(password, user.password)
    console.log(checkPassword) 
  if (checkPassword){

    console.log("PASO EL CHECKPASSWORD") 
  let tokenSession = tokenSign(user)
  console.log("tokenSession:") 
  console.log(tokenSession) 
  console.log("user:") 
  console.log(user) 
  return {user, tokenSession};}
  } else {
return null
  }
} catch (error) {
  res.status(500).json({ message: "Error del servidor" });
}
};

module.exports = {
  getAuthUser
};

