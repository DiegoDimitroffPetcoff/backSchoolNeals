const cloudinary = require ("cloudinary").v2
import { config } from "dotenv"

cloudinary.config({
    cloud_name: config.cloud_name, 
    api_key: config.api_key, 
    api_secret: config.api_secret
    
})

