'use strict';

/*
	In this model file we are defining our model schema. We are interacting with our MongoDB instance with Mongoose and pass our
	our interaction through bluebird. We are using bluebird to promisify our Mongoose connection because our our server needs to
	be syncronus. We don't want to return information or a status code to our users until our Queries to MongoDB has finished.
	You can find more about bluebird and Mongoose here:

	http://bluebirdjs.com
	
	http://mongoosejs.com

	First we Add Mongoose while also using bluebird to promify all mongoose's methods. More info on how bluebird does this is available here.

	http://bluebirdjs.com/docs/api/promise.promisifyall.html

	We could skip this step and write our endpoint controller with callbacks but then we might end up in callback hell or the pyramid of DOOM!

*/

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

/*
	Then we define a new schema for MongoDB by calling mongoose.Schema. This will allow us to define documents and sub documents that will model
	our information. I prefer to think of the schema as a giant JSON blob.
*/
var Schema = mongoose.Schema;

/*
	In the lines that follow we are defining schema types for our schema. Mongoose allows the following types:

	String
	Number
	Date
	Buffer
	Boolean
	Mixed
	ObjectId
	Array

	As an example of an embedded or child document I am defining a Super Power Schema first. When we move on to the parent schema we will
	pass in this schema
*/

var SuperPowers = new Schema({
	power: String
})

var FansSchema = new Schema({
	userId: {type: String, required: true},
	userName: {type: String, required: true} ,
	fanSince: {type: Date, default: Date.now} 
})

/*
	Here is our main schema where we will be saving our information.
*/


var HeroSchema = new Schema({
	heroName: String,
	firstName: String,
	lastName: String,
	fans: [FansSchema],
	powers: [SuperPowers]

})

/*
	Lastly we are exporting our model so that it can be used when it is required in another file. One this to note is that we are specifying
	the singular version of your model. Mongoose will always look for the plural version in MongoDB. Ex. if it is the hero model in MongoDB it
	will be heroes 
*/

module.exports = mongoose.model('Hero', HeroSchema);