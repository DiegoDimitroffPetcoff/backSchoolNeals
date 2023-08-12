const { Router } = require("express");
const route = Router();
const controlleruser = require("../controllers/controllersUsers");
const checkAuth = require("../middleWare/checkAuth")

route.get("/user", checkAuth, controlleruser.getAllUsers);
route.get("/user/:id", controlleruser.getByIdUser);
route.post("/user", controlleruser.postUser);

route.patch("/user/:id", controlleruser.editeUser);
route.delete("/user/:id", controlleruser.deteleUser);

route.post("/addcourse", controlleruser.addCourse);
route.delete("/deletecourse", controlleruser.deleteCourse);

module.exports = route;
