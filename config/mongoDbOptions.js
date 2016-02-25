 'use strict'

var seed = require("./seed"),
	
	config = {
			dbLocation: "mongodb://localhost/express-tutorial",
			port: 3000,
			seedDB: true,
			seedData: function(){
				seed.data()
			}			
	};

module.exports = config

