const {check, body}=require ('express-validator');
const db = require('../database/models')
const bcryptjs = require('bcryptjs');

module.exports=[
    /* nombre */
    check('Nombres').trim().notEmpty().withMessage('Campo obligarorio').isLength({min:2}).withMessage('Debe contener al menos 2 caracteres').bail(),
    
    /* apellido */
    check('Apellidos').trim().notEmpty().withMessage('Campo obligatorio').isLength({min:2}).withMessage('Debe contener al menos 2 caracteres').bail(),
    
    /* email */
    check('email').trim().isEmail().withMessage('Debe ingresar un email válido.'),
    
    body('email')
        .custom((value)=>{
            return db.Usuarios.findOne({
                where:{
                    email:value
                }
            })
            .then(user => {
                if(user){
                    return Promise.reject("El email ya se encuentra registrado.")
            }
        })
    }),
    /* password */
    check('pass').trim().notEmpty().withMessage('La contraseña no puede estar vacia').isLowercase().not()
    .isUppercase().not().isNumeric().not().isLength({min:6},{max:12}).withMessage('La contraseña debe tener entre 6 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero').bail(),
    
    /* password2 */
    check('pass2').trim().notEmpty().withMessage('La confirmacion de la contraseña no puede estar vacia').isLowercase().not()
    .isUppercase().not().isNumeric().not().isLength({min:6},{max:12}).withMessage('La confirmación de contraseña contraseña debe tener entre 6 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero').bail(),
    
    /* terminos */
    check('Terminos').trim().notEmpty().withMessage('Debes aceptar los terminos y condiciones para continuar').bail(),
    
    /* confirmacion de contraseñas */
    body('pass2')
    .custom((value,{req}) => value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden')
]