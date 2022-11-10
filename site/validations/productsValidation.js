const {check}= require('express-validator');

module.exports=[
    /* titulo */
    check('Titulo').trim().notEmpty().withMessage('Este campo es obligatorio').bail().isLength({min:5}). withMessage('Debe contener al menos 5 caracteres'),    

    /* categoria */
    check('Categoria').trim().notEmpty().withMessage('Debe seleccionar una categoría').bail(),

    /* Sub-categoria */
    check('subCategoria').trim().notEmpty().withMessage('Debe seleccionar un tipo de producto').bail(),

    /* precio */
    check('Precio').trim().notEmpty().withMessage('Debe ingresar un precio').isInt().bail(),

    /* desc */
    check('Descuento').trim().isInt().withMessage('De no aplicar descuento inserte 0 (Cero)').bail(),

    /* stock */
    check('Stock').trim().notEmpty().withMessage('Campo obligatorio').isInt().bail(),

    /* descripcion */
    check('Descripcion').trim().notEmpty().withMessage('Por favor inserte la descripción del producto').bail().isLength({min:20}). withMessage('Debe contener al menos 20 caracteres'),
]