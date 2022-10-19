const fs = require('fs');
const path = require('path');
const productos = require('../data/productos.json');
const historial = require('../data/historial.json');

let db = require('../database/models')

const {validationResult} = require('express-validator');

module.exports = {
    listar: (req, res) => {
        db.Productos.findAll({
            include:[{
                all:true
            }]
        })
        .then(productos=>{
            /* return res.send(productos) */
            return res.render('admin/listar', {
                productos,
                redirection: "historial"
            })
        })        
    },
    crear: async (req, res) => {
        try{
        let categorias= await db.Categorias.findAll()
        let subCategorias= await db.subCategorias.findAll()
        return res.render('admin/crear',{
        categorias,
        subCategorias
        })
        }catch(error){
            return res.send(error)
        }
    },
    store: (req,res) => {
        //return res.send(req.body)
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
        let {Titulo,Categoria,subCategoria,Precio,Descuento,Stock,Descripcion} = req.body
          
             db.Productos.create({
                /* id: productos[productos.length-1].id+1, */
                titulo: Titulo,
                categoria: Categoria,
                subcategoria: subCategoria,
                precio: +Precio,
                descuento: +Descuento,
                stock: +Stock,
                descripcion: Descripcion                
            })
            .then(productoNuevo =>{
            if(req.files){
                let img=req.files.map(imagen=>{
                    let nuevo=
                        {nombre:imagen.filename,
                        productosId: productoNuevo.id
                    }
                    return nuevo
                })
        
            db.Imagenes.bulkCreate(img)
            .then(imagenes =>{
                return res.redirect('/admin/listar')
                })
          }else{
                db.Imagenes.create({
                    nombre: 'default-image.png',
                    productosId: productoNuevo.id
                })
                .then(imagenes=>{
                    return res.redirect('/admin/listar')
                })
            }
        })
                .catch(error=> res.send(error))            
          }else{
            id= +req.params.id
            let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', '..', 'public', 'images', 'productos', dato))
            let producto =productos.find(product => product.id === id)
         /* return res.send(req.body) */
          return res.render('admin/crear', {
              errors: errors.mapped(),
              old: req.body
          })
        }
    },

    editar: (req, res) => { 
        let idParams= +req.params.id
        let categorias=db.Categorias.findAll()
        let producto=db.Productos.findOne({
            where:{
                id:idParams
            },
            include: [{
                all:true
            }]
        })
        Promise.all([categorias,producto])
        .then(([categorias,producto]) =>{
            return res.render('admin/crear',{
                producto,
                categorias
            })
        })
        .catch(error => res.send(error))
}, 
    update: (req, res) => {
        
       
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
            let id = +req.params.id
            let {Titulo,Categoria, subCategoria,Precio,Descuento,Stock,Descripcion,imagen} = req.body

            let producto=db.Productos.findOne({
                where:{
                    id:idParams
                }/* ,
                include:[{
                    all:true
                }] */
            })

            let actualizacion=db.Productos.update({
                /* id: productos[productos.length-1].id+1, */
                titulo: Titulo,
                categoria: Categoria,
                subcategoria: subCategoria,
                precio: +Precio,
                descuento: +Descuento,
                stock: +Stock,
                descripcion: Descripcion                
            },{
                where:{
                    id:idParams
                }
            })
            Promise.all([producto,actualizacion])
            .then(([producto,actualizacion]) =>{

                let imagen1

                /* imagen 1 */

                /* pregunto si existe en la base de datos */
                if(producto.imagenes[0].length !== 0){
                    /* pregunto si viene la imagen */
                    if(!!req.files.imagen1){
                        /* se guarda el nombre en una variable para despues borrarla */
                        imagen1= producto.imagenes[0].nombre
                        /* si todo esta ok la reemplazamos en la base de datos */
                        db.imagenes.update({
                            file:req.files.imagen[0].filename
                        },{
                            where:{
                                id: producto.imagenes[0].id
                            }
                        })
                        /* para borrar la img anterior */
                        if(fs.existsSync(path.join(__dirname,'../../public/images/productos', imagen1)))(
                            fs.existsSync(path.join(__dirname,'../../public/images/productos', imagen1))
                        )
                    }
                }else{
                    /* si no existe la imagen en la base de datos , la creamos */
                    if(!!req.files.imagen1){
                        /* creamos la img en la db */
                        db.Imagenes.create({
                            nombre:req.files.imagen1[0].filename,
                            productosId:producto.id
                        })
                    }
                }
                    return res.redirect('/admin/listar')
                })
                   /*  if(req.files){
                        let img=req.files.map(imagen=>{
                            let nuevo=
                                {nombre:imagen.filename,
                                productosId: productos.id
                            }
                            return nuevo
                        })
                
                    db.Imagenes.bulkCreate(img)
                    .then(imagenes =>{
                        return res.redirect('/admin/listar')
                        })
                  }else{
                        db.Imagenes.create({
                            nombre: 'default-image.png',
                            productosId: productos.id
                        })
                        .then(imagenes=>{
                            return res.redirect('/admin/listar')
                        })
                    }*/
                .catch(error=> res.send(error))         
        } else {
            return res.render('admin/crear', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    destroy: (req, res) => {
        let id = +req.params.id

        db.Productos.findOne({
            where:{
                id:id
            },
            include:[{
                all:true
            }]
        })
        .then(producto=>{
            db.Historiales.create({
                titulo: producto.Titulo,
                categoria: producto.Categoria,
                subcategoria: producto.subCategoria,
                precio: producto.Precio,
                descuento: producto.Descuento,
                stock: producto.Stock,
                descripcion: producto.Descripcion
            })
            .then(historial => {
                let promesas = []

                let imagen1 = db.HistorialImagenes.create({
                    nombre: producto.imagenes[0].nombre,
                    historialId: historial.id
                })

                Promise.all(imagen1)
                .then((imagen1)=>{
                    db.Productos.destroy({
                        where : {
                            id : id
                        }
                    })
                    .then(producto => {
                        return res.redirect('/admin/listar')/* ruta a listar o historial? */
                    })
                })
            })
        })
        .catch(error => res.send(error))
        /* let productoParaEliminar = productos.find((elemento) => {
            return elemento.id == id
        })
        historial.push(productoParaEliminar)
        guardarHistorial(historial)
        let productosModificados = productos.filter(producto => producto.id !== id)
        guardar(productosModificados)
 */
        
    },
    historial: (req, res) => {

        db.Historiales.findAll({
            include : [{
                all : true
            }]
        })
        .then(historial => {
            /* return res.send(historial) */
            return res.render('admin/listar', {
                productos: historial,
                redirection: "listar"
            })
        })
        .catch(error => res.send(error))
    },

    restore: (req, res) => {
        let id = +req.params.id

        db.Historiales.findOne({
            where:{
                id:id
            },
            include : [{
                all : true
            }]
        })
        .then(historialProducto=>{
            db.Productos.create({
                titulo: historialProducto.Titulo,
                categoria: historialProducto.Categoria,
                subcategoria: historialProducto.subCategoria,
                precio: historialProducto.Precio,
                descuento: historialProducto.Descuento,
                stock: historialProducto.Stock,
                descripcion: historialProducto.Descripcion
            })
            .then(productoNuevo=>{
                let imagen1 = db.Imagenes.create({
                    nombre: historialProducto.imagenes[0].nombre,
                    productoId: productoNuevo.id
                })
                Promise.all(imagen1)
                .then((imagen1)=>{
                    db.Productos.destroy({
                        where : {
                            id : id
                        }
                    })
                })
        })
        .catch(error => res.send(error))

        
        return res.redirect('/admin/listar')
    })
},
    crash: (req, res) => {
        let id= +req.params.id

        db.Historiales.findOne({
            where:{
                id:id
            },
            include : [{
                all : true
            }]
        })
        .then(producto =>{
            /* return res.send(producto) */
        /*  let producto = historial.find(product => product.id === id) */

        let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', 'public', 'images', 'productos', dato))
        if (ruta(producto.image.nombre) && (producto.image.nombre !== "default-image.png")) {
            fs.unlinkSync(path.join(__dirname, '..','public', 'images', 'productos', producto.image.nombre))//supuestamente esto eliminaria la imagen
        }
        })
        .catch(error => res.send(error))    
        
        db.Historiales.destroy({
            where:{
                id:id
            }
        })
        .then(eliminar=>{
            return res.redirect('/admin/listar')
        })
        .catch(error => res.send(error))
        /* let historialModificado = historial.filter(producto => producto.id !== id)
        guardarHistorial(historialModificado) */  
    },
}