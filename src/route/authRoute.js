const { Router } = require("express");
const { send } = require("express/lib/response");
const controlleruser = require("../controllers/controllersAuth");
const route = Router();

route.post("/login", controlleruser.getByIdUser);
route.get("/login", (req,res)=>{
    res.json("yes")
})

module.exports = route;
