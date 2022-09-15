const {check}= require('express-validator');

module.exports=[
    /* titulo */
    check('Titulo').trim().notEmpty().withMessage('Este campo es obligatorio').bail(),    

    /* categoria */
    check('Categoria').trim().notEmpty().withMessage('Debe seleccionar una categoría').bail(),

    /* precio */
    check('Precio').trim().notEmpty().isInt().bail(),

    /* desc */
    check('Descuento').trim().isInt().withMessage('De no aplicar descuento inserte 0 (Cero)').bail(),

    /* stock */
    check('Stock').trim().notEmpty().isInt().withMessage('Campo obligatorio').bail(),

    /* descripcion */
    check('Descripcion').trim().notEmpty().withMessage('Por favor inserte la descripción del producto').bail()
]