const express = require('express');
const cors = require("cors");
const file = require ("express-fileupload")

const routeIndex = require('../route/routeIndex.js');
const userRoutes = require ('../route/userRoute.js');
const authRoutes = require ('../route/authRoute.js')
const app = express();

app.use(file({
    useTempFiles: true,
    tempFileDir: './uploads'
}))
app.use(cors())
app.use(express.json());
app.use(routeIndex);
app.use(userRoutes);
app.use(authRoutes);

module.exports = app
