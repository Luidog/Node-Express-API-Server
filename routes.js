'use strict';

var path = require("path")

module.exports = function(serverApp) {

	serverApp.use("/api/heroes", require("./api/heroes"))

	serverApp.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve('./staticpages/404.html'));
      
    });
}