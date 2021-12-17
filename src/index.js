const express = require("express");

const app = express();



app.use(express.urlencoded({ extended: false }));

app.use(express.json());


const userController = require('./controllers/user.controller');
const restaurantController = require('./controllers/restaurant.controller');

app.use("/users", userController);
app.use("/restaurants", restaurantController);

module.exports = app;