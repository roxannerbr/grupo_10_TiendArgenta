const {check, body} = require ('express-validator');
const db = require('../database/models')
const bcryptjs = require('bcryptjs');


module.exports=[
    /* EMAIL */
    check('email').trim()
    .notEmpty().withMessage('Debe ingresar su email').bail()
    .isEmail().withMessage('Debe ingresar un email válido.'),
    

    /* PASSWORD */
    check('pass').trim()
    .notEmpty().withMessage('Debe ingresar su contraseña')
    .isLength({min:6, max:12}).withMessage('La contraseña debe tener entre 6 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero.'),
    
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