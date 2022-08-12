module.exports = {
    home : (req,res) => {
        return res.render('home')
    },
    contacto : (req,res) => {
        return res.render('contacto')
    },
    pregFrecuentes : (req,res) => {
        return res.render('pregFrecuentes')
    },
    novedades : (req,res) => {
        return res.render('novedades')
    },
    cotillon : (req,res) => {
        return res.render('cotillon')
    },
    coleccionables : (req,res) => {
        return res.render('coleccionables')
    },
    indumentaria : (req,res) => {
        return res.render('indumentaria')
    },
    mujer : (req,res) => {
        return res.render('mujer')
    },
    infantil : (req,res) => {
        return res.render('infantil')
    },
    hombre : (req,res) => {
        return res.render('hombre')
    }
}