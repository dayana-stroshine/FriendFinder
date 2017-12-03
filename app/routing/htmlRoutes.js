// ==============================================================================
// Name: Friend Finder App
// Description: An app that takes user input and compares it to answer from other 
//              users to find a perfect match. 
// Built using: Express.js, Node.js, NPM packages
// Created by: Dayana Stroshine
// Date: 11/18/2017 
//==============================================================================

//Path package
var path = require("path");

//GET requests
module.exports = function(app) {
  
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};
