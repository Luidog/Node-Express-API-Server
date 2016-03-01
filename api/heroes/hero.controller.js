'use strict';

/*
  The endpoint's controller is used to perform operations with
  it's database model. Do do this we are requiring our endpoint's model
  to allow the controller to interact with our the endpoint data.
*/

var Hero = require("./hero.model"),
    _ = require('lodash');

/*
  We define three helper functions to begin. responsewithresult returns our
  data's information and a statuscode of 200, handleError returns a statuscode 500 and returns the error
  (we can optionally create a logging module to help us) to the browser, EntityNotFound returns an error
  and a 404 code. We are using these functions to return the information we need so that we are always 
  return a statuscode. Failing to return a status code will cause the browser to time out.
*/

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(function(updated) {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(function() {
          res.status(204).end();
        });
    }
  };
}

exports.index = function(req, res) {
  Hero.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
};

exports.show = function(req, res) {
  Hero.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Creates a new Hero in the DB
exports.create = function(req, res) {
  Hero.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};

// Updates an existing Hero in the DB
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Hero.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Deletes a Hero from the DB
exports.destroy = function(req, res) {
  Hero.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};