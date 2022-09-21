const {check}= require('express-validator');

module.exports=[
    /* titulo */
    check('titulo').trim().notEmpty().withMessage('Este campo es obligatorio').bail(),    

    /* categoria */
    check('categoria').trim().notEmpty().withMessage('Debe seleccionar una categoría').bail(),

    /* Sub-categoria */
    check('subcategoria').trim().notEmpty().withMessage('Debe seleccionar un tipo de producto').bail(),

    /* precio */
    check('precio').trim().notEmpty().isInt().bail(),

    /* desc */
    check('descuento').trim().isInt().withMessage('De no aplicar descuento inserte 0 (Cero)').bail(),

    /* stock */
    check('stock').trim().notEmpty().isInt().withMessage('Campo obligatorio').bail(),

    /* descripcion */
    check('descripcion').trim().notEmpty().withMessage('Por favor inserte la descripción del producto').bail()
]