const fs = require('fs');
const path = require('path');
const productos = require('../data/productos.json');
const historial = require('../data/historial.json');
const {validationResult} = require('express-validator');

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
        //return res.send(req.file)
        let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagen = {
                param: 'imagen',
                msg: req.fileValidationError,
            }
            errors.errors.push(imagen)
        }
        /* console.log(req.body);
  return res.send(errors.mapped()) */
        if (errors.isEmpty()) {

        let {Titulo,Categoria,Precio,Descuento,Stock,Descripcion} = req.body

        let productoNuevo = {
            id: productos[productos.length-1].id+1,
            titulo: Titulo,
            categoria: Categoria,
            precio: +Precio,
            descuento: +Descuento,
            stock: +Stock,
            descripcion: Descripcion,
            imagen: req.file ? req.file.filename : 'default-image.png'
        }

        productos.push(productoNuevo);
        guardar(productos);

        return res.redirect('/admin/listar')
    }else{
        id= +req.params.id
        let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', '..', 'public', 'images', 'productos', dato))
        let producto =productos.find(product => product.id === id)

     /*  return res.send(errors.mapped()) */
      return res.render('admin/crear', {
          errors: errors.mapped(),
          old: req.body
      })
    }
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


        
        let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagen = {
                param: 'imagen',
                msg: req.fileValidationError,
            }
            errors.errors.push(imagen)
        }
        /* console.log(req.boy);
        return res.send(errors.mapped()) */
        if (errors.isEmpty()) {
            productos.forEach(producto => {
                if (producto.id === id) {
                    producto.titulo = Titulo
                    producto.categoria = Categoria
                    producto.precio = +Precio
                    producto.descuento = +Descuento
                    producto.stock = +Stock
                    producto.descripcion = Descripcion
                }
            })
            guardar(productos)
            return res.redirect('/admin/listar')
        } else {
            return res.render('admin/crear', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },

    destroy: (req, res) => {
        id = +req.params.id

        let productoParaEliminar = productos.find((elemento) => {
            return elemento.id == id
        })

        historial.push(productoParaEliminar)
        guardarHistorial(historial)

        let productosModificados = productos.filter(producto => producto.id !== id)
        guardar(productosModificados)

        return res.redirect('/admin/historial')
    },
    historial: (req, res) => {

        return res.render('admin/listar', {
            productos: historial,
            redirection: "listar"
        })
    },
    restore: (req, res) => {
        id = +req.params.id

        let productoParaRestaurar = historial.find((elemento) => {
            return elemento.id == id
        })

        //para que no se duplique el id de producto
        let lastId= productos[productos.length-1].id + 1
        productoParaRestaurar.id = lastId

        productos.push(productoParaRestaurar)
        guardar(productos)

        let historialModificado = historial.filter(producto => producto.id !== id)
        guardarHistorial(historialModificado)

        return res.redirect('/admin/listar')
    },
    crash: (req, res) => {
        id= +req.params.id

        let producto = historial.find(product => product.id === id)
        
        let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', 'public', 'images', 'productos', dato))
        if (ruta(producto.image) && (producto.image !== "default-image.png")) {
            fs.unlinkSync(path.join(__dirname, '..','public', 'images', 'productos', producto.image))
        }
     
        let historialModificado = historial.filter(producto => producto.id !== id)
        guardarHistorial(historialModificado)

        return res.redirect('/admin/listar')
    },
}