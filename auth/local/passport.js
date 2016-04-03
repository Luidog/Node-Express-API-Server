var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

function localAuthenticate(User, email, password, done) {
  User.findOneAsync({
    email: email.toLowerCase()
  })
    .then(function(user) {
      if (!user) {
        return done(null, false, {
          message: 'This email is not registered.'
        });
      }
      user.authenticate(password, function(authError, authenticated) {
        if (authError) {
          return done(authError);
        }
        if (!authenticated) {
          return done(null, false, {
            message: 'This password is not correct.'
          });
        } else {
          return done(null, user);
        }
      });
    })
    .catch(function(err) {
      return done(err);
    });
}
/**
 *  The setup function defines the fields of we will use to validate our requests and a callback function
 *  we will use to authenticate our users during a request 
 *  
 * @param  {schema} User    The User properties defined in our Mongoose model.
 * @param  {object} config  The configuration properties defined in the config file.
 * @return {function}       A callback function used to define our authenticatation strategy. 
 */
exports.setup = function(User) {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password' 
  }, function(email, password, done) {
    return localAuthenticate(User, email, password, done);
  }));
};
