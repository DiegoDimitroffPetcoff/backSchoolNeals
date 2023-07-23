const express = require('express');

const routeIndex = require('../route/routeIndex.js');
const userRoutes = require ('../route/userRoute.js');
const authRoutes = require ('../route/authRoute.js')
const app = express();

app.use(express.json());
app.use(routeIndex);
app.use(userRoutes);
app.use(authRoutes);

module.exports = app
