'use strict';

var Hero = require('../api/heroes/hero.model');

var seed = {
	data: function(){
		data()
	}
}

function data() {

Hero.find({})
	.removeAsync()
  .then(function() {
    Hero.createAsync({

			heroName: "Nightcrawler",
			firstName: "Kurt",
			lastName: "Vagner",
			powers: [{  
				power: "Agility" },{
				power: "Teleportation"},{ 
				power: "Agility" } 
				] },{
			heroName: "Wolverine",
			firstName: "Logan",
			lastName: "Vagner",
			powers: [{  
				power: "Enhanced Healing" },{
				power: "Enhanced Smell" },{
				power: "Claws" }
				]
    })
    return "true"
    }).then(function() {
      console.log('finished populating Heroes');
    });
}
  module.exports = seed