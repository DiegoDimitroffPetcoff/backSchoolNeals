const servicesAuth = require("../services/servicesAuth");

async function getAuthUser(req, res) {
  try {
    let userById = await servicesAuth.getAuthUser(req.body);
    if (userById) {
      res.status(200).json(userById);
    } else {
      res.status(404).json(userById);
    }
  } catch (error) {}
}

module.exports = {

  getAuthUser,

};
