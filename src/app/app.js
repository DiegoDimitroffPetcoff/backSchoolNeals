const express = require('express');

const routeIndex = require('../route/routeIndex.js');
const app = express();

app.use(express.json());
app.use(routeIndex)

module.exports = app
