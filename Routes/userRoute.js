const express = require('express');
const route = express.Router();
// Require controller modules.
const {register} = require('../Controller/userController')


route.post('/register',register);

module.exports =  route; 

