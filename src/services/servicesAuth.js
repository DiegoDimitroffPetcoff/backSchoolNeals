const User = require("../DBS/mongoose/models/user");
const mongoose = require("mongoose");


getByIdUsers = async (data) => {
const { nickname, password } = data;

try {
  const user = await User.findOne({ nickname, password });
  if (user) {
    return user;
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

