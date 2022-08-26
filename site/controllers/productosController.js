let productos = require('../data/productos.json')
//HOME NEW PRODUCTS
let detalles = productos.slice(productos.length-4)

module.exports = {
    detalles : (req,res) => {
        let id = +req.params.id
        let productoEnDetalle = productos.find((producto) => producto.id === id)
        return res.render('detalles',{
            producto : productoEnDetalle,
            detalles
        })
    },
    carrito : (req,res) => {
        return res.render('carrito')

        // Cuenta el número de veces que se repite el producto
       let agregarCarrito = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
    },
    productos : (req,res) => {
        return res.render('productos')
    },

}