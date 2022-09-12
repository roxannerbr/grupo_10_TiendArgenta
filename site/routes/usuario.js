const express = require('express');
const router = express.Router();
const {login, register,  processLogin, processRegister,  usuarios, logout} = require('../controllers/usersController');

const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');
const upload= require('../middlewares/multerUsuarios')

router.get('/register', register)
router.post('/register',upload.single('image'), registerValidation, processRegister);

router.get('/login', login);
router.post('/login', loginValidation, processLogin);


//usuario logueado
router.get('/check', function(req, res){
    if(req.session.usuarioLogueado == undefined){
        res.send('No estas logueado')
    }else{
        res.send('El usuario logueado es' + req.session.usuarioLogueado)
    }
})

router.get('/usuario', usuarios)
router.delete('/usuario', logout)

module.exports = router;