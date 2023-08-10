const User = require("../DBS/mongoose/models/user");
const mongoose = require("mongoose");
const {compare} = require("../utils/handleBcrypt")


getByIdUsers = async (data) => {
const { nickname, password } = data;

try {
  const user = await User.findOne({ nickname});
  if (user) {
    let checkPassword = await compare(password, user.password)
  if (checkPassword)
  {return user;}
  } else {
return null
  }
} catch (error) {
  res.status(500).json({ message: "Error del servidor" });
}
};

module.exports = {
  getByIdUsers
};

