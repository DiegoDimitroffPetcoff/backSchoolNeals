const User = require("../DBS/mongoose/models/user");
const mongoose = require("mongoose");


getByIdUsers = async (data) => {

;

const { nickname, password } = data;
console.log(nickname);
console.log(password)
try {
  const user = await User.findOne({ nickname, password });
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
} catch (error) {
  res.status(500).json({ message: "Error del servidor" });
}
};



module.exports = {
  getByIdUsers
};

