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
				]} ,{
			heroName: "Mr. Danger",
			firstName: "Benjamin",
			lastName: "de la Parra",
			powers: [{  
				power: "Enhanced poop" },{
				power: "supersonic cries" },{
				power: "heart melting laughter" }
				]},{
			heroName: "Spiderman",
			firstName: "Peter",
			lastName: "Parker",
			powers: [{  
				power: "Spider Sense" },{
				power: "Cling to walls" },{
				power: "super strength" }
				]},{
			heroName: "Batman",
			firstName: "Bruce",
			lastName: "Wayne",
			powers: [{  
				power: "Filthy Rich" },{
				power: "Greatest Detective" }
				]

    })
    return "true"
    }).then(function() {
      console.log('finished populating Heroes');
    });

}
  module.exports = seed