"use strict"

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var SuperPowers = new Schema({
	power: String
})

var HeroSchema = new Schema({
	heroName: String,
	firstName: String,
	lastName: String,
	powers: [SuperPowers]

})

module.exports = mongoose.model('Hero', HeroSchema);