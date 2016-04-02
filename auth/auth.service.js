'use strict';

var passport = require('passport');
var config = require('../configuration/serverOptions');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var compose = require('composable-middleware');
var User = require('../api/users/user.model');
var validateJwt = expressJwt({
  secret: config.secrets.session
});

/**
 * Retrieves the authorization token from the request and validates it. It then returns the decoded JSON object to req.user.
 * It uses express-jwt to validate the token.
 *
 * https://github.com/auth0/express-jwt
 * 
 * @return object  returns composable middleware that results in the user account that made the account.
 * 
 * @error  res.send On error it responds with error code 401 and ends the connection.
 */
function isAuthenticated() {
  return compose()
    // Validate jwt
    .use(function(req, res, next) {
        req.headers.authorization = req.get("authorization");
      validateJwt(req, res, next);
    })
    // Attach user to request
    .use(function(req, res, next) {
      User.findByIdAsync(req.user._id)
        .then(function(user) {
          if (!user) {
            return res.status(401).end();
          } return req.user = user; })
        .catch(function(err) {
          return next(err);
        });
      next()
    });
}

/**
 * Checks if the user role meets the minimum requirements of the route
 */

/**
 * Checks if the users' role matches the role passed to it
 * @param  {string}  roleRequired the role required to proceed
 * @return {function} returns composable middleware consisting of isAuthenticated
 */
function hasRole(roleRequired) {
  if (!roleRequired) {
    throw new Error('Required role needs to be set');
  }

  return compose()
    .use(isAuthenticated())
    .use(function meetsRequirements(req, res, next) {

      if (config.userRoles.indexOf(req.user.role) >=
          config.userRoles.indexOf(roleRequired)) {
        next();
      }
      else {
        res.status(403).send('Forbidden');
      }
    });
}

/**
 * sigToken uses JWT to sign a token 
 * @param  {[type]} id       [description]
 * @param  {[type]} username [description]
 * @param  {[type]} role     [description]
 * @return {[type]}          [description]
 */
function signToken(id, username, role) {
  return jwt.sign({ _id: id, userName: username, role: role }, config.secrets.session, {
    expiresIn: 600
  });
}

/**
 * Set token cookie directly for oAuth strategies
 */
function setTokenCookie(req, res) {
  if (!req.user) {
    return res.status(404).send('Something went wrong, please try again.');
  }
  var token = signToken(req.user._id, req.user.role);
  res.cookie('token', JSON.stringify(token));
  res.redirect('/');
}

exports.isAuthenticated = isAuthenticated;
exports.hasRole = hasRole;
exports.signToken = signToken;
exports.setTokenCookie = setTokenCookie;
