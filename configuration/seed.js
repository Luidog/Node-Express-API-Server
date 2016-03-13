'use strict';

var Hero = require('../api/heroes/hero.model'),
	logger = require("./winston");

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
			firstName: "James",
			lastName: "Howlett",
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
				]},{
			heroName: "Dead Pool",
			firstName: "Wade",
			lastName: "Wilson",
			powers: [{  
				power: "Merc with a mouth" },{
				power: "breaks fourth wall" }
				]

    })
    return "true"
    }).then(function() {
      logger.info('finished populating Heroes');
    });

}
  module.exports = seed