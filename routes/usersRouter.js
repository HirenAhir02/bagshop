const express = require('express');
const router = express.Router();
const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {generateToken} = require('../utils/generateToken');
const {registerUser, loginUser, logout } = require('../controllers/authController');
router.get('/', (req,res) =>{
    res.send('Hello World!');
})

router.post('/register',registerUser);

router.post('/login',loginUser);

router.get('/logout',logout)

module.exports =  router;