const express = require('express');
const router = express.Router();
const {login, register,  processLogin, processRegister,  usuarios} = require('../controllers/usersController');

const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');
const upload= require('../middlewares/multerUsuarios')

router.get('/login', login);
router.post('/login', loginValidation, processLogin);

router.get('/register', register)
router.post('/register',upload.single('image'), registerValidation, processRegister);

router.get('/usuario', usuarios)

module.exports = router;