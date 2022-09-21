let productos = require('../data/productos.json')
//HOME NEW PRODUCTS
let nuevosProductos = productos.slice(productos.length-4)

module.exports = {
    home : (req,res) => {
        return res.render('home',
        {
            productos,
            nuevosProductos
        })
    },
    search : (req,res) => {
        let elemento = req.query.search

        let resultados = productos.filter(producto => {
            return producto.titulo.toLowerCase().indexOf(elemento.toLowerCase()) != -1
        })
        return res.render('busqueda',{
            busqueda: elemento,
            resultados
        });
    },
    contacto : (req,res) => {
        return res.render('contacto')
    },
    pregFrecuentes : (req,res) => {
        return res.render('pregFrecuentes')
    },
    novedades : (req,res) => {
        return res.render('novedades',
        {
            productos,
            nuevosProductos
        })
    },
    indumentaria : (req,res) => {
        return res.render('indumentaria')
    }
}