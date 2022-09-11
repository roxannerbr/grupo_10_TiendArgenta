const {check}=require ('express-validator');
const fs = require('fs');
const path = require('path');
const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/productos.json')
    , JSON.stringify(dato, null, 4), 'utf-8')


module.exports=[
    /* email */
    check('Correo').trim().notEmpty().withMessage('Debes ingresar un email').bail().isEmail().withMessage('Ingresa un email válido'),
    /* password */
    check('pass').trim().notEmpty().withMessage('Debes completar la contraseña').bail().isLength({min:6}). withMessage('Debe contener al menos 6 caracteres'),

]