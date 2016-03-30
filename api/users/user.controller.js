'use strict';

var User = require('./user.model'),
    Hero = require('../heroes/hero.model'),
    UserEvents = require("./user.events"),
    passport = require('passport'),
    config = require('../../configuration/serverOptions'),
    jwt = require('jsonwebtoken');

function validationError(res, statusCode) {
  statusCode = statusCode || 422;
  return function(err) {
    res.status(statusCode).json(err);
  }
}
function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function _responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
      return null
    }
  };
}

function respondWith(res, statusCode) {
  statusCode = statusCode || 200;
  return function() {
    res.status(statusCode).end();
  };
}

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  User.findAsync({}, '-salt -password') 
    .then(function(users) {
        res.status(200).json(users);
    })  
     .catch(handleError(res));

};

/**
 * Creates a new user
 */
exports.create = function(req, res, next) {
  console.log('create fired')
  var newUser = new User(req.body);
  newUser.provider = 'local';
  newUser.role = 'user';
  newUser.saveAsync()
    .spread(function(user) {
      var token = jwt.sign({ _id: user._id, username: user.username, role: user.role }, config.secrets.session, {
        expiresIn: 3600
      });
      res.json({ token: token });
    })
    .catch(validationError(res));
};

/**
 * Get a single user
 */
exports.show = function(req, res, next) {
  var userId = req.params.id;

  User.findByIdAsync(userId)
    .then(function(user) {
      if (!user) {
        return res.status(404).end();
      }
      res.json(user.profile);
    })
    .catch(function(err) {
      return next(err);
    });
};

/**
 * Deletes a user
 * restriction: 'admin'
 */
exports.destroy = function(req, res) {
  User.findByIdAndRemoveAsync(req.params.id)
    .then(function() {
      res.status(204).end();
    })
    .catch(handleError(res));
};

/**
 * Adds Favorites to  a user
 */
exports.addFavorite = function(req, res) {
  console.log('adding favorite')
	let userId = req.body.userId;
  let userName = req.body.username;
  let heroId = req.body.heroId; 
	User.findByIdAndUpdateAsync( userId, {$addToSet: { favorites: heroId } }, {safe: true, upsert: true})
  Hero.findByIdAndUpdateAsync(heroId, {$addToSet: { fans: [{ username: username, userId: userId }]}})
      .then(_responseWithResult(res))
      .catch(function(error){console.log(error)})
};

/**
 * Remove Favorites from a user
 */
exports.removeFavorite = function(req, res) {

	User.findByIdAndUpdateAsync(req.body.userId,
		{$pull: { favorites: req.body.heroId }},
		{safe: true },
		function(err, model) {
	   	 	if (err){
	   	 	console.log(err)
	    	} else if (model){
				console.log(model)
	    	}
	    console.log(req.body.heroId)
	res.status(204).end();
    })
};


/**
 * Change a users password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findByIdAsync(userId)
    .then(function(user) {
      if (user.authenticate(oldPass)) {
        user.password = newPass;
        return user.saveAsync()
          .then(function() {
            res.status(204).end();
          })
          .catch(validationError(res));
      } else {
        return res.status(403).end();
      }
    });
};

/**
 * Get my info
 */
exports.me = function(req, res, next) {
  var userId = req.user._id;

  User.findOneAsync({ _id: userId }, '-salt -password')
    .then(function(user) { // don't ever give out the password or salt
      if (!user) {
        return res.status(401).end();
      }
      return res.json(user);
    })
    .catch(function(err) {
      return next(err);
    });
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};
