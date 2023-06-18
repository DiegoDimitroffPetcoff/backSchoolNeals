const {Router}= require('express');
const route = Router();

route.get('/',(req,res)=> res.json("connected from Route"))

module.exports= route
