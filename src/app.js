const express = require("express"); //require the express module
const app = express(); // initialize the app

const routeConfig = require("./config/route-config.js");

routeConfig.init(app);


module.exports = app; // export the app so we can pass it to our Node server in src/server.js