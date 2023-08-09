const User = require("../DBS/mongoose/models/user");
const mongoose = require("mongoose");


getByIdUsers = async (data) => {

  console.log("data desde service");
  console.log(data);

const { nickname, password } = data;

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

