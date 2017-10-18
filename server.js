//Setting up dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//creating the express server
var app = express();

//setting up the port
//this means the server will either listen to the port assigned to it (like when hosted on Heroku),
//OR it will listen to port 3000 (like when running localhost:3000 on an individual computer)
var PORT = process.env.PORT || 3000;

//Handling data parsing with Express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//the routes for the server
require(".app/routing/apiRoutes")(app);
require(".app/routing/htmlRoutes")(app);