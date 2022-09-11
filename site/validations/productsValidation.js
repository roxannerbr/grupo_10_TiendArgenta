const {check}=require ('express-validator');

module.exports=[
    check('titulo').trim().notEmpty().withMessage('Este campo es obligatorio').bail(),
    check('producto').trim().notEmpty().withMessage('Debe seleccionar una categoría').bail(),
    check('categoria').trim().notEmpty().withMessage('Debe seleccionar una categoría').bail(),
    check('precio').trim().notEmpty().isInt().bail(),
    check('descuento').trim().isInt().withMessage('De no aplicar descuento inserte 0 (Cero)').bail(),
    check('stock').trim().notEmpty().isInt().withMessage('Campo obligatorio').bail(),
    check('descripcion').trim().notEmpty().withMessage('Por favor inserte la descripción del producto').bail()
]