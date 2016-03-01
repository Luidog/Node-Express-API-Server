 'use strict'

var seed = require("./seed"),
	path = require("path"),
	
	config = {
			dbURL: "mongodb://localhost/express-tutorial",
			dbLocation: "./data/db",
			logLocation: "./logs/MongoDB",
			port: 3000,
			seedDB: true,
			seedData: function(){
				seed.data()
			}			
	};

module.exports = config

