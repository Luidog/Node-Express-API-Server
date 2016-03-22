/**
 * User model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var User = require('./user.model');
var logger = require("../../configuration/winston");
var UserEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
UserEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  User.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    UserEvents.emit(event + ':' + doc._id, doc);
    UserEvents.emit(event, doc);
  }
}

UserEvents.on('save', function(user){
	logger.verbose('New user saved, named %s.', user.firstName)
})

UserEvents.on('remove', function(user){
	logger.verbose('%s has been removed.', user.firstName)
})

module.exports = UserEvents;
