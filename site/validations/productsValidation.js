const {check}= require('express-validator');

module.exports=[
    /* titulo */
    check('Titulo').trim().notEmpty().withMessage("Debes ingresar un titulo").bail().isLength({min:2},{max:10}).withMessage("El titulo del producto debe tener 2 letras y maximo 10"),    

    /* categoria */
    check('Categoria').trim().notEmpty().withMessage('Debe seleccionar una opcion').bail(),

    /* Sub-categoria */
    check('subCategoria').trim().notEmpty().withMessage('Debe seleccionar una opcion').bail(),

    /* precio */
    check('Precio').trim().notEmpty().withMessage('Debe ingresar un precio').isInt().bail().isLength({min:2},{max:10}).withMessage("El precio del producto debe contener 2 caracteres y maximo 10"),

    /* desc */
    check('Descuento').trim().isInt().withMessage('De no aplicar descuento inserte 0 (Cero)').bail(),

    /* stock */
    check('Stock').trim().notEmpty().withMessage("Debe ser un numero mayor a 0 y menor a 100").isInt().bail(),

    /* descripcion */
    check('Descripcion').trim().notEmpty().withMessage("Debe ingresar una descripcion").bail().isLength({min:10}). withMessage("La descripcion debe contener mas de 10 caracteres"),
]