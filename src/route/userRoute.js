const { Router } = require("express");
const route = Router();
const controlleruser = require("../controllers/controllersUsers");

route.get("/user", controlleruser.getAllUsers);
route.get("/user/:id", controlleruser.getByIdUser);
route.post("/user", controlleruser.postUser);

route.patch("/user/:id", controlleruser.editeUser);
route.delete("/user/:id", controlleruser.deteleUser);

route.post("/addcourse", controlleruser.addCourse);

module.exports = route;