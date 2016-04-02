

/*
	First we pass in path from Node.js. This will turn our. hello!!!! 
*/
var path = require("path"),
	express = require("express"),
	passport = require('passport'),
	cookieParser = require('cookie-parser'),
	flash    = require('connect-flash'),
	bodyParser = require('body-parser');

module.exports = function(serverApp) {

	serverApp.use(bodyParser.json()); // get information from html forms
	serverApp.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

	serverApp.use("/api/heroes", require("./api/heroes"))
	serverApp.use('/api/users', require('./api/users'));
	serverApp.use('/auth', require('./auth'));





/*
	The static route used below will be used to deliver page dependencies such as CSS and Javascript files.	
*/

	serverApp.use("/frontend", express.static("./frontend/"))

	serverApp.route('/')
    .get(function(req, res) {
      res.sendFile(path.resolve('./frontend/index.html'));
  })
/*
	Any other route used other than what we specifically define will default to	our 404 page.
*/
	serverApp.route('/*')
    .get(function(req, res) {
      res.redirect('/#/nothinghere');
    });
}