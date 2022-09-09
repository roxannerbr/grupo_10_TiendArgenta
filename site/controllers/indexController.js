let productos = require('../data/productos.json')
//HOME NEW PRODUCTS
let nuevosProductos = productos.slice(productos.length-4)

/*let producto = productos.filter(cat => cat.categoria == "producto")
// COTILLON PRODUCTS
let cotillon = productos.filter(cat => cat.categoria == "cotillon")
// COLECCION PRODUCTS
let coleccion = productos.filter(colec => colec.categoria == "Coleccionables")
// INDUMENTARIA PRODUCTS
let hombre = productos.filter(masc => masc.categoria == "Ind-Hombre")
let mujer = productos.filter(fem => fem.categoria == "Ind-Mujer")
let infantil= productos.filter(inf => inf.categoria == "Ind-Infantil")*/

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
            return producto.marca === elemento || (producto.titulo.includes(elemento)) /* || (producto.descripcion.toLowerCase().includes(elemento.toLowerCase())) */
        })
        return res.render('busqueda', 
        {
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
    },
    /*producto : (req,res) => {
        return res.render('producto',
        {
            productos,
            producto
        })
    },
    cotillon : (req,res) => {
        return res.render('cotillon',
        {
            productos,
            cotillon
        })
    },
    coleccionables : (req,res) => {
        return res.render('coleccionables',
        {
            productos,
            coleccion
        })
    },
    mujer : (req,res) => {
        return res.render('mujer',
        {
            productos,
            mujer
        })
    },
    infantil : (req,res) => {
        return res.render('infantil',
        {
            productos,
            infantil
        })
    },
    hombre : (req,res) => {
        return res.render('hombre',
        {
            productos,
            hombre
        })
    }*/
}