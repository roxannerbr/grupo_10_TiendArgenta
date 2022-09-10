const {check}=require ('express-validator');

module.exports=[
    check('Titulo').trim().notEmpty().withMessage('Este campo es obligatorio').bail(),
    check('Categoria').trim().notEmpty().withMessage('Debe seleccionar una categoria').bail(),
    check('Precio').trim().notEmpty().isInt().bail(),
    check('Descuento').trim().isInt().withMessage('De no aplicar descuento inserte 0 (Cero)').bail(),
    check('Stock').trim().notEmpty().isInt().withMessage('Campo obligatorio').bail(),
    check('Descripcion').trim().notEmpty().withMessage('Por favor inserte la descripcion del producto').bail()
]