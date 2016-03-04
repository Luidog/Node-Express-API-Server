'use strict';

/*
  Hero model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Hero = require('./hero.model'),
	HeroEvents = new EventEmitter();
var Request = require('request');

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
  console.log("Hero %s event has been registered", event)
}

function emitEvent(event) {
  return function(doc) {
    HeroEvents.emit(event + ':' + doc._id, doc);
    HeroEvents.emit(event, doc);
  }
}

HeroEvents.on('save', function(hero){
	console.log('New hero saved %s.', hero.heroName)
})

HeroEvents.on('remove', function(hero){
	console.log('%s has been removed.', hero.heroName)
})



module.exports = HeroEvents;
