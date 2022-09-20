const express = require('express');
const router = express.Router();
const userCheck= require('../middlewares/userCheck')
const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');
const upload= require('../middlewares/multerUsuarios');
const {login, register,  processLogin, processRegister,  usuarios, logout, editarUsuario, edit} = require('../controllers/usersController');
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

//editar un usuario
router.get("/editarUsuario/:id", editarUsuario);
router.put("/editarUsuario/:id",upload.single('imagen'),edit);

router.get('/perfil',userCheck,usuarios)
router.delete('/logout', logout)

module.exports = router;