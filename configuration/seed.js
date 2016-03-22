'use strict';

var Hero = require('../api/heroes/hero.model'),
	User = require('../api/users/user.model'),
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
    User.find({}).removeAsync()
  .then(function() {
    User.createAsync({
      provider: 'local',
      role: 'admin',
      firstName: 'Lui',
      lastName: 'de la Parra',
      email: 'noreply@apple.com',
      password: 'apple',
      devices: {deviceName: 'iPhone 6s', deviceType: 'iPhone', deviceToken: '<00000000000000000000000>'}
  	})
  return "true"
  })
  .then(function() {
	  logger.info("finished Populating Users")
	  })

}
  module.exports = seed