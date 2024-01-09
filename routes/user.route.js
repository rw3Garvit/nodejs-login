const express = require("express");
const { userController } = require("../controllers");

const route = express.Router();

route.post("/register", userController.addUser);
route.post("/login", userController.loginUser);

module.exports = route;
