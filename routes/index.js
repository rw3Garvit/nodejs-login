const express = require("express");
const userRoute = require("./user.route");

const route = express.Router();

route.use("/user", userRoute);

module.exports = route;
