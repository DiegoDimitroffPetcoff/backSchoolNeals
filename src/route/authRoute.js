const { Router } = require("express");
const { send } = require("express/lib/response");
const route = Router();


route.get("/login", (req,res)=>{
    res.json("yes")
})

module.exports = route;
