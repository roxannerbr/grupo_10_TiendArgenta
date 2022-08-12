const express = require('express');
const router = express.Router();
const {login, register, usuario} = require('../controllers/usersController')

router.get('/login', login);
router.get('/register', register)
router.get('/usuario', usuario)

module.exports = router;