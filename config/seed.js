"use Strict"

var Hero = require('../api/heroes/hero.model');

Hero.find({}).removeAsync()
  .then(function() {
    Hero.createAsync({

			heroName: "Nightcrawler",
			firstName: "Kurt",
			lastName: "Vagner",
			powers: [{  
				power: "Agility" },{
				power: "Teleportation"},{ 
				power: "Agility" } 
				], {
			heroName: "Wolverine",
			firstName: "Logan",
			lastName: "Vagner",
			powers: [{  
				power: "Agility" },{
				power: "Teleportation"},{ 
				power: "Agility" } 
				], {
					
				}

				}
    }) .then(function() {
      console.log('finished populating Heroes');
    });
  });