"use strict"

const userController = require('./../controllers/userController');
const router = require('express').Router();

router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);


module.exports = router;