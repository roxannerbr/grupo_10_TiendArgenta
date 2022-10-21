const {check, body}=require ('express-validator');
//const usuarios= require('../data/users.json');
const db = require('../database/models')
const bcryptjs = require('bcryptjs');


module.exports=[
    /* email */
    check('email').trim().notEmpty().withMessage('Debes ingresar un email').bail().isEmail().withMessage('Ingresa un email válido'),
    /* password */
    check('pass').trim().notEmpty().withMessage('Debes completar la contraseña').bail().isLength({min:6}). withMessage('Debe contener al menos 6 caracteres'),
    /* body */
    body('pass')
        .custom((value, {req}) => {
           return db.Usuarios.findOne({
                where: {
                    email: req.body.email
                }
           })
           .then(user => {
               if(!bcryptjs.compareSync(value, user.dataValues.password)){
                   return Promise.reject()
               }
           })
           .catch(() => {
               return Promise.reject("Email o contraseña incorrecta")
           })
        })
]