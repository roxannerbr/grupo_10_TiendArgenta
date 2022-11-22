const {check, body}=require ('express-validator');
const db = require('../database/models')
const bcryptjs = require('bcryptjs');

module.exports=[
    /* nombre */
    check('Nombres').trim().notEmpty().withMessage('Campo obligarorio').isLength({min:2}).withMessage('Debe contener al menos 2 caracteres').bail(),
    
    /* apellido */
    check('Apellidos').trim().notEmpty().withMessage('Campo obligatorio').isLength({min:2}).withMessage('Debe contener al menos 2 caracteres').bail(),
    
/* DNI */
check('dni').trim().isLength({max:9}).withMessage('El campo no debe tener mas de 9 digitos').bail(),
    
/* telefono */
check('telefono').trim().isLength({max:10}).withMessage('El campo no debe tener mas de 10 digitos').bail(),

/* direccion */ 
check('direccion').trim().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{2,30}$/).withMessage("El campo debe tener numeros y al menos una letra mayuscula").bail(),

/* localidad */ 
check('localidad').trim().matches(/^[a-zA-Z\sñáéíóúü ]*$/).withMessage("El campo debe contener solo letras").bail(),
 
/* provincia */ 
check('provincia').trim().matches(/^[a-zA-Z\sñáéíóúü ]*$/).withMessage("El campo debe contener solo letras").bail(),
 
/* codPostal */
check('codPost').trim().isLength({max:5}).withMessage('El campo no debe tener mas de 5 digitos').bail(),
  
]