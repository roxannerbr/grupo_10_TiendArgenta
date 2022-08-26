const fs = require('fs')
const path = require('path')
const productos = require('../data/productos.json')
const historial = require('../data/historial.json')

const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/productos.json')
    , JSON.stringify(dato, null, 4), 'utf-8')
const guardarHistorial = (dato) => fs.writeFileSync(path.join(__dirname, '../data/historial.json')
    , JSON.stringify(dato, null, 4), 'utf-8')

module.exports = {
    listar: (req, res) => {
        return res.render('admin/listar', {
            productos,
            redirection: "historial"
        })
    },
    crear: (req, res) => {
        return res.render('admin/crear')
    },
    store:(req,res) => {
        let {Titulo,Categoria,Precio,Descuento,Stock,Descripcion} = req.body

        let productoNuevo = {
            id: productos[productos.length - 1].id + 1,
            titulo: Titulo,
            categoria: Categoria,
            precio: Precio,
            descuento: Descuento,
            stock: Stock,
            descripcion: Descripcion,
            imagen: [
                "default-image.png"
            ],
        }

        productos.push(productoNuevo);
        guardar(productos);

        res.redirect('/admin/listar')
    },
    editar: (req, res) => {
        let categorias = ['Cotillon', 'Coleccionables', 'Ind-Mujer', 'Ind-Hombre', 'Ind-Infantil']
        let id = +req.params.id
        let producto = productos.find((elemento) => {
            return elemento.id == id
        })
        /* return res.send(producto) Comprobar que esta llegando bien el elemento*/
        return res.render('admin/editar', {
            producto,
            categorias
        })
    },
    update: (req, res) => {
        let id = +req.params.id
        let {Titulo,Categoria,Precio,Descuento,Stock,Descripcion} = req.body

        productos.forEach(producto => {
            if (producto.id === id) {
                producto.titulo = Titulo
                producto.categoria = Categoria
                producto.precio = Precio
                producto.descuento = Descuento
                producto.stock = Stock
                producto.descripcion = Descripcion
                producto.imagen =[
                    "default-image.png"
                    ]
            }   
    });

        guardar(productos)
        return res.redirect('/admin/listar')
    },
    destroy: (req, res) => {
        const id = +req.params.id

        let productoParaEliminar = productos.find((elemento) => {
            return elemento.id == idParams
        })

        historial.push(productoParaEliminar)
        guardarHistorial(historial)

        let productosModificados = productos.filter(producto => producto.id !== idParams)
        guardar(productosModificados)

        return res.redirect('/admin/listar')
    },
    historial: (req, res) => {

        return res.render('admin/listar', {
            productos: historial,
            redirection: "listar"
        })
    },
    restore: (req, res) => {
        idParams = +req.params.id

        let productoParaRestaurar = historial.find((elemento) => {
            return elemento.id == idParams
        })

        productos.push(productoParaRestaurar)
        guardar(productos)

        let historialModificado = historial.filter(producto => producto.id !== idParams)
        guardarHistorial(historialModificado)

        return res.redirect('/admin/listar')
    },
    crash: (req, res) => {
        idParams = +req.params.id

        let historialModificado = historial.filter(producto => producto.id !== idParams)
        guardarHistorial(historialModificado)

        return res.redirect('/admin/listar')
    },
}