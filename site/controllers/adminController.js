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
            redirection: "history"
        })
    },
    crear: (req, res) => {
        return res.render('admin/crear')
    },
    store: (req, res) => {
        if (req.body.titulo.length > 1) {

            let img = req.files.map(imagen => {
                return imagen.filename
            })

            let { Marca, Titulo, Categoria, Precio, Descuento, Stock, Descripcion } = req.body

            let productoNuevo = {
                id: productos[productos.length - 1].id + 1,
                marca: Marca,
                titulo: Titulo,
                categorias: Categoria,
                precio: +Precio,
                descuento: +Descuento,
                stock: +Stock,
                descripcion: Descripcion,
                imagenes: (req.files.length === 4) ? img : ['default-image.png', 'default-image.png', 'default-image.png', 'default-image.png']
            }

            productos.push(productoNuevo)
            guardar(productos)

            /* Redirecciona a la lista de productos */
            return res.redirect('/admin/listar')
            /* Redirecciona al detalle del producto recien creado */
            /* res.redirect(`/products/detail/${productoNuevo.id}`) */
        }else{
            return res.redirect('/admin/crear')
        }
    },
    editar: (req, res) => {
        let categorias = ['Cotillon', 'Coleccionables', 'Indumentaria']
        id = +req.params.id
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
        idParams = +req.params.id
        let { Marca, Titulo, Categoria, Precio, Descuento, Stock, Descripcion } = req.body

        productos.forEach(producto => {
            if (producto.id === idParams) {
                producto.marca = Marca
                producto.titulo = Titulo
                producto.categorias = Categoria
                producto.precio = +Precio
                producto.descuento = +Descuento
                producto.stock = +Stock
                producto.descripcion = Descripcion
            }
        })
        guardar(productos)
        return res.redirect('/admin/listar')
    },
    destroy: (req, res) => {
        idParams = +req.params.id

        let productoParaEliminar = productos.find((elemento) => {
            return elemento.id == idParams
        })

        historial.push(productoParaEliminar)
        guardarHistorial(historial)

        let productosModificados = productos.filter(producto => producto.id !== idParams)
        guardar(productosModificados)

        return res.redirect('/admin/history')
    },
    history: (req, res) => {

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