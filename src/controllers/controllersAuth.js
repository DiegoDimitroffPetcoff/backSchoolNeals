const servicesUsers = require("../services/servicesAuth");

async function getByIdUser(req, res) {
  try {
    console.log("req body desde CONTROLLER");
    console.log(req.body);
    let userById = await servicesUsers.getByIdUsers(req.body);
    if (userById) {
      res.status(200).json(userById);
    } else {
      res.status(404).json(userById);
    }
  } catch (error) {}
}

module.exports = {

  getByIdUser,

};
