const servicesUsers = require("../services/servicesUsers");

async function getAllUsers(req, res) {
  try {
    let allUsers = await servicesUsers.getAllUsers();
    if (allUsers) {
      res.status(200).json(allUsers);
    } else {
      res.status(404).json({ message: "Not couses Foud" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
async function getByIdUser(req, res) {
  try {
    let userById = await servicesUsers.getByIdUsers(req.params.id);
    if (userById) {
      res.status(200).json(userById);
    } else {
      res.status(404).json(userById);
    }
  } catch (error) {}
}
async function postUser(req, res) {
  try {
    let allUsers = await servicesUsers.postUser(req.body);
    if (allUsers) {
      res.status(200).json(allUsers);
    } else {
      res.status(404).json({ message: "Module not Founded" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
async function editeUser(req, res) {
  try {
    let userEdited = await servicesUsers.editeUser(req.params.id, req.body);
    if (userEdited) {
      res.status(200).json(userEdited);
    } else {
      res.status(404).json({ message: "user not Foud to Edite" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
async function deteleUser(req, res) {
  try {
    let userDeleted = await servicesUsers.deleteUser(req.params.id);
    if (userDeleted) {
      res.status(200).json(userDeleted);
    } else {
      res.status(404).json({ error: "user not finded" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
async function addCourse(req, res) {
  try {
    let courseAdded = await servicesUsers.addCourse(req.body);

    if (courseAdded) {
      res.status(200).json(courseAdded);
    } else {
      res.status(404).json({ error: "user not finded" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
async function deleteCourse(req, res) {
  try {
    let deleteCourse = await servicesUsers.deleteCourse(req.body);

    if (deleteCourse) {
      res.status(200).json(deleteCourse);
    } else {
      res.status(404).json({ error: "user not finded" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  getAllUsers,
  getByIdUser,
  postUser,
  editeUser,
  deteleUser,
  addCourse,
  deleteCourse
};
/**
This is an exaple about how the client should send the object to addCourse
{"userId": "6494b386fcb116d4b08c6de0",
"courseId": "649255b87e667053710d15e6"}
 */