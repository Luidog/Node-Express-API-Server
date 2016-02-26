

/*
	First we pass on path from Node.js. This will turn our 
*/
var path = require("path")
var express = require("express")

module.exports = function(serverApp) {

	serverApp.use("/api/heroes", require("./api/heroes"))

	serverApp.use("/static", express.static("./staticpages/dependencies/"))

	serverApp.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve('./staticpages/404.html'));



    });
}