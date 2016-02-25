"use strict"

var express = require("express"),
	mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/express-tutorial")
mongoose.connection.on("error", function(error){
	console.log("MongoDB connection error: " + err)
}) 

var app = express();
var	server = require("http").createServer(app);
	require('./routes')(app);

if (true) { require('./config/seed'); }

function startServer(){
	server.listen(3000, function(){
		console.log("express server running")
	})
}

setImmediate(startServer);

exports = module.exports = app