"use strict";

module.exports = function(app) {
	app.use("/api/heroes", require("./api/heroes"))
	  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}