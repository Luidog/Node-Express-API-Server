/*
	
*/

'use strict';

var express = require("express"),
	bodyParser = require("body-parser"),
	controller = require("./hero.controller");

var router = express.Router();


router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;