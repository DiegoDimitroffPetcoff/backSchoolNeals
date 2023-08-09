const express = require('express');
const cors = require("cors");

const routeIndex = require('../route/routeIndex.js');
const userRoutes = require ('../route/userRoute.js');
const authRoutes = require ('../route/authRoute.js')
const app = express();

app.use(cors())
app.use(express.json());
app.use(routeIndex);
app.use(userRoutes);
app.use(authRoutes);

module.exports = app
