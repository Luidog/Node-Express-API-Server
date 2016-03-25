'use strict';

var express = require('express');
var controller = require('./user.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.post('/', controller.create);
router.get('/',  controller.index); 
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me',auth.isAuthenticated(), controller.me); 
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.post('/addfavorite',auth.isAuthenticated(), controller.addFavorite); //  
router.post('/removefavorite', auth.isAuthenticated(), controller.removeFavorite);
router.get('/:id', auth.isAuthenticated(), controller.show);


module.exports = router;

