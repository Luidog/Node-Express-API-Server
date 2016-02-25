"use strict"

var express = require("express"),
	controller = require("./hero.controller");

var router = express.Router();

router.get('/', controller.index);

module.exports = router;