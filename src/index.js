const express = require("express");

var cors = require('cors');

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());


const userController = require('./controllers/user.controller');
const restaurantController = require('./controllers/restaurant.controller');

app.use("/users", userController);
app.use("/restaurants", restaurantController);

module.exports = app;