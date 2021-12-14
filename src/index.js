const express = require("express");

const app = express();



app.use(express.urlencoded({ extended: false }));

app.use(express.json());


const userController = require('./controllers/user.controller');

app.use("users", userController);

module.exports = app;