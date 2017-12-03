// ==============================================================================
// Name: Friend Finder App
// Description: An app that takes user input and compares it to answer from other 
//              users to find a perfect match. 
// Built using: Express.js, Node.js, NPM packages
// Created by: Dayana Stroshine
// Date: 11/18/2017 
//==============================================================================

// NPM packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Create Express server 
var app = express();

//Set a port
var port = process.env.PORT || 8000;

//Set Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routing
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get ("/api/friends",function(req, res) {
	res.json(friendsArray);
});

app.post ("/api/friends",function(req, res) {
	res.json(friendsArray);
});

//Listener
app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});
