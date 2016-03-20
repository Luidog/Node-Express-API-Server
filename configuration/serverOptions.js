'use strict';

var serverOptions = {
	secrets: {
    	session: 'cutback-secret'
  	},
  	port: 3000,
	userRoles: ['guest', 'user', 'admin'],
};

module.exports = serverOptions;