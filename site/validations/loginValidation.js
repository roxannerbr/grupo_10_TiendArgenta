const {check}=require ('express-validator');
const fs = require('fs');
const path = require('path');
const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/productos.json')
    , JSON.stringify(dato, null, 4), 'utf-8')


module.exports=[
    check('Correo').trim().notEmpty().withMessage('Debes ingresar un email').isEmail().withMessage('Ingresa un email válido').bail(),
    check('pass').trim().notEmpty().isLength({min:6}). withMessage('Debe contener al menos 6 caracteres').withMessage('Debes completar la contraseña').bail()
]