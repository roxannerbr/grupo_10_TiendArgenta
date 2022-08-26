const fs=require('fs');
const productos=require('./productos.json')


/* Eliminar un producto */
let eliminarProducto = productos.filter(element => element.id !== idParams)
return res.render('admin/destroy', {
    productos,
    redirection: "historial"
})