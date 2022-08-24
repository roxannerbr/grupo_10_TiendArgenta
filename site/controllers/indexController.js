let productos = require('../data/productos.json')
//HOME NEW PRODUCTS
let nuevosProductos = productos.slice(productos.length-4)
// COTILLON PRODUCTS
let cotillon = productos.filter(cat => cat.categoria == "cotillon")
// COLECCION PRODUCTS
let coleccion = productos.filter(colec => colec.categoria == "Coleccionables")
// INDUMENTARIA PRODUCTS
let hombre = productos.filter(masc => masc.categoria == "Ind-Hombre")
let mujer = productos.filter(fem => fem.categoria == "Ind-Mujer")
let infantil= productos.filter(inf => inf.categoria == "Ind-Infantil")

module.exports = {
    home : (req,res) => {
        return res.render('home',
        {
            productos,
            nuevosProductos
        })
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
    indumentaria : (req,res) => {
        return res.render('indumentaria')
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
    }
}