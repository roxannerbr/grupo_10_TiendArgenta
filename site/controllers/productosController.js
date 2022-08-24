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
    },
    productos : (req,res) => {
        return res.render('productos')
    },

}