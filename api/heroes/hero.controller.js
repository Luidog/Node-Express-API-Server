"use strict"

var Hero = require("./hero.model")

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  console.log(entity)
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

exports.index = function(req, res) {
  Hero.findAsync({})
    .then(function(heroes) {
      res.status(200).json(heroes);
    })
    .catch(handleError(res));
};