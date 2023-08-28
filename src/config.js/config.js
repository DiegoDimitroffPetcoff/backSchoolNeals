require('dotenv').config()

const PORT= process.env.PORT;
const MONGO_URI= process.env.MONGO_URI;
const JWT_SECRET= process.env.JWT_SECRET;
const cloud_name= process.env.cloud_name; 
const api_key = process.env.api_key;
const api_secret=  process.env.api_secret;


module.exports = {PORT, MONGO_URI, JWT_SECRET, cloud_name, api_key, api_secret}