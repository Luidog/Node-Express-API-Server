'use strict';


/*
First we require the two main modules we will be using to create our REST Server.
Express will be used to create and route our server and mongoose will connect
to our MongoDB Database.

Express Guide:
http://expressjs.com/en/4x/api.html

Mongoose Guide:
http://mongoosejs.com/docs/guide.html

We also require the node http library to create our server later on.

Node HTTP:
https://nodejs.org/api/http.html

*/ 

var express = require("express"),
	mongoose = require("mongoose"),
	http = require("http"),

/* 
We then require our options for our MongoDB Database. 
Inside this file we set the port, location, and if we should seed
the DB with records or not. I prefer to split configurable options 
into config files so that I do not need to go back and
hardcode this information into the module.
 It is also my way of trying to ensure seperation of concerns.

 Wikipedia Love:
 https://en.wikipedia.org/wiki/Separation_of_concerns
 */
	config = require("./config/mongoDbOptions");

/*
Next we use Mongoose to connect to our MongoDB instance. It should be noted that MongoDB already needs to be running. I am sure
I will recap this during the presentation. If you missed it, come to the next one. Perhaps I will add it to this project in the
future. It would be even better if you did though. Github is our friend.	
*/
mongoose.connect(config.dbURL)
mongoose.connection.on("error", function(error){
	console.log("MongoDB connection error: " + error)
}) 
/*
Now we are using Express to define a server app. We require node's http library and use this along with the create server app
.syntax. After this we are requiring our routes module to pass into our newly made express server so that it knows where to route
our users

Great Scott!! We just made a pretty big leap. Let's break this down:

1. We create a new express app
2. We tell this app to create a server while also passing in the http module we required earlier to create an http server.
3. We then require* our routes module to teach our newly made server app how to route incoming requests.

* A quick note: My style is to always have the things I will require at top of the file.  I have added this here to better explain
what we are doing.

*/


var serverApp = express();
var	server = http.createServer(serverApp);
	require('./routes')(serverApp); // this routes file exports a function. So here we are passing our Server App to the function in routes.

/*
Now that we are connected to our MongoDB Database successfully and we have created an Express Server, we will optionally seed our
database with records.
*/

if(config.seedDB){ 
	config.seedData()
} 

/*
The startServer function will be responsible for starting our Express server on the port we specifed in our config file. We are telling
it to listen traffic and respond according to our routing. It will also print a message to terminal via the callback. Eventually we should
create a logging funtion so that messages are not lost over time.
*/

function startServer(){
	server.listen(config.port, function(){
		console.log("Express Server running on port: " + config.port)
	})
}

/*
We use the Node.JS setImmediate function to start our server. 
*/

setImmediate(startServer);

/*
Finally we export our newly written server app so that other files can use it. We won't be doing this yet. We might use this with Gulp to
automate the creation of our server app.
*/

exports = module.exports = serverApp