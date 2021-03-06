'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');

var router = express.Router();

router.post('/', function(req, res, next) {



/**
 * Passport.Authenticate will use 
 * @param  {[type]} err   [description]
 * @param  {[type]} user  [description]
 * @param  {[type]} info) 
 * @return {[type]}       [description]
 */
  passport.authenticate('local', function(err, user, info) {
    var error = err || info;
    if (error) {
      return res.status(401).json(error);
    }
    if (!user) {
      return res.status(404).json({message: 'Something went wrong, please try again.'});
    }

    var token = auth.signToken(user._id, user.username, user.role);
    res.json({  firstName: user.firstName, lastName: user.lastName, username: user.username, id: user._id, email: user.email, token: token });
  })(req, res, next)
});

module.exports = router;
