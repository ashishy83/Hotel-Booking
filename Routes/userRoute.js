const express = require('express');
// Require controller modules.
const userController = require('../Controller/userController')
const route = express.Router();


route.post('/register',userController.register);
route.get('/login',userController.login);
route.post('/resetPassword',userController.resetPassword);

module.exports =  route; 

