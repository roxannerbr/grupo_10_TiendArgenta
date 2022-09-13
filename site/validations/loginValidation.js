const {check, body}=require ('express-validator');
const usuarios= require('../data/users.json');
const bcryptjs = require('bcryptjs');

module.exports=[
    /* email */
    check('Correo').trim().notEmpty().withMessage('Debes ingresar un email').bail().isEmail().withMessage('Ingresa un email válido'),
    /* password */
    check('pass').trim().notEmpty().withMessage('Debes completar la contraseña').bail().isLength({min:6}). withMessage('Debe contener al menos 6 caracteres'),
    /* body */
    body('Correo')
    .custom((value,{req}) =>{
        let usuario = usuarios.find(user => user.Correo === value && bcryptjs.compareSync(req.body.pass, user.pass))

        if (usuario) {
            return true
        }else{
            return false
        }
    })
    .withMessage('El Correo y/o la contraseña no son válidos')
]