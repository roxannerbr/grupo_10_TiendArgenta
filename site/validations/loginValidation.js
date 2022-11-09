const {check, body} = require ('express-validator');
const db = require('../database/models')
const bcryptjs = require('bcryptjs');


module.exports=[
    /* EMAIL */
    check('email').trim()
    .isEmail().withMessage('Debe ingresar un email válido.'),
    
    body('email')
        .custom((value)=>{
            return db.Usuarios.findOne({
                where:{
                    email:value
                }
            })
            .then(user => {
                if(!user){
                    return Promise.reject("El usuario no se encuentra registrado.")
            }
        })
    }),

    /* PASSWORD */
    check('pass').trim()
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres.'),
    
    /* BODY */
    body('pass')
        .custom((value,{req})=>{
            
            return db.Usuarios.findOne({
                where:{
                    email:req.body.email
                }
            })
            .then(user => {
                if(!bcryptjs.compareSync(value, user.dataValues.password)){
                    return Promise.reject()
                }
            })
            .catch(() => {
                return Promise.reject("El Email o la contraseña no coinciden.")
            })
        })
]