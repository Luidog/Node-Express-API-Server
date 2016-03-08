'use strict';

/*
  Hero model events
 */


var Hero = require('./hero.model'),
    Request = require('request'),
    logger = require("../../configuration/winston"),
    EventEmitter = require('events').EventEmitter;
var HeroEvents = new EventEmitter();


// Set max event listeners (0 == unlimited)
HeroEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Hero.schema.post(e, emitEvent(event));
  logger.verbose("Hero %s event has been registered", event)
}

function emitEvent(event) {
  return function(doc) {
    HeroEvents.emit(event + ':' + doc._id, doc);
    HeroEvents.emit(event, doc);
  }
}

HeroEvents.on('save', function(hero){
	logger.verbose('New hero saved, named %s.', hero.heroName)
})

HeroEvents.on('remove', function(hero){
	logger.verbose('%s has been removed.', hero.heroName)
})



module.exports = HeroEvents;
