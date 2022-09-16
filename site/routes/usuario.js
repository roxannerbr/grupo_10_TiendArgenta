const express = require('express');
const router = express.Router();
const {login, register,  processLogin, processRegister,  usuarios, logout} = require('../controllers/usersController');
const userCheck= require('../middlewares/userCheck')
const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');
const upload= require('../middlewares/multerUsuarios');
const { Router } = require('express');
const usersController = require('../controllers/usersController');

//registro de usuario
router.get('/register', register)
router.post('/register',upload.single('imagen'), registerValidation, processRegister);

/* router.get('/login', login); */
router.get('/login', login)
router.post('/login', loginValidation, processLogin);

//usuario logueado
router.get('/check', function(req, res){
    if(req.session.userLogin == undefined){
        res.send('No estás logueado')
    }else{
        res.send('El usuario logueado es:' + req.session.userLogin)
    }
})

router.get("/editarUsuario")
router.get('/perfil',userCheck,usuarios)
router.delete('/logout', logout)

module.exports = router;