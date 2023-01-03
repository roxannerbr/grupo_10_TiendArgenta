const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

module.exports = {
    
    register : (req,res) => {
        return res.render('register', {
            title : "Register | TiendArgenta"
        })
    },
    processRegister: (req,res)=>{
/* return res.send(req.file) */

        let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagen = {
                param: 'image',
                msg: req.fileValidationError,
            }
            errors.errors.push(imagen)
        }
        if (errors.isEmpty()) {
            let {Nombres, Apellidos, dni, telefono, direccion, localidad, provincia,codPost, email, pass,imagen} = req.body
            
            db.Usuarios.create({
                nombre: Nombres,
                apellido: Apellidos,
                telefono,
                dni,
                direccion,
                localidad,
                provincia,
                codPost,
                email,
                password: bcrypt.hashSync(pass, 10),
                rolId: 2,
                imagen: req.file ? req.file.filename : "login.png" /* req.file > 1 ? req.file.filename : "login.png" */
                
            })
            .then(usuario => {
                req.session.userLogin = {
                    id : usuario.id,
                    name : usuario.nombre,
                    lastName : usuario.apellido,
                    dni: usuario.dni,
                    telefono: usuario.telefono,
                    direccion: usuario.direccion,
                    localidad: usuario.localidad,
                    provincia: usuario.provincia,
                    codPost: usuario.codPost,
                    email : usuario.email,
                    image : req.file ? req.file.filename : usuario.imagen,
                    rol : usuario.rolId
                }
                return res.redirect('/')
            })
            .catch(errores => res.send(errores))
        }  else {
            return res.render('register', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },

    login : (req,res) => {
        return res.render('login', {
            title : "Log In | TiendArgenta"
        })
    },
    processLogin: (req,res)=>{
        let errors= validationResult(req)
        /* return res.send(errors); */
        if (errors.isEmpty()){
            
            const {email, recordarme} = req.body
            db.Usuarios.findOne({
                where : {
                    email
                },
                include: [{
                    all: true
                }]
            })
            .then(usuario => {
                
                //return res.send(usuario)
                req.session.userLogin = {
                    id : usuario.id,
                    name : usuario.nombre,
                    lastName : usuario.apellido,
                    dni: usuario.dni,
                    telefono: usuario.telefono,
                    direccion: usuario.direccion,
                    localidad: usuario.localidad,
                    provincia: usuario.provincia,
                    codPost: usuario.codPost,
                    email : usuario.email,
                    image : usuario.imagen,
                    rol : usuario.rolId
                }
            if(recordarme){
                res.cookie('TiendArgenta',req.session.userLogin,{maxAge: 1000 * 60 * 60 * 24})
            }
            //CARRITO
            req.session.carrito = []
            db.Ordenes.findOne({
                usuariosId: req.session.userLogin.id,
                status: 'pending',
                include: [
                    {
                        association : 'carrito',
                        attributes: ['productosId', 'cantidad'],
                        include: [
                            {
                                association : 'producto',
                                attributes: ['id', 'titulo', 'precio', 'descuento', 'stock'],
                                include: [
                                    {
                                        association : 'imagenes',
                                        attributes: ['nombre']
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }).then(orden =>{
                if(!orden) {
                    console.log("El usuario logueado no tiene una orden pendiente")
                    return res.redirect('/users/profile')

                } else {
                    console.log("El usuario logueado tiene una orden pendiente")
                    orden.carrito.forEach(item => {

                        let producto = {
                            id: item.producto.id,
                            titulo: item.producto.titulo,
                            precio: item.producto.precio,
                            descuento: item.producto.descuento,
                            imagen: item.producto.imagenes[0].nombre,
                            stock: item.producto.stock,
                            cantidad: +item.cantidad,
                            subtotal: (+item.producto.precio - (+item.producto.precio * +item.producto.descuento / 100)) * item.cantidad ,
                            ordenId: orden.id ,
                        }
                        req.session.carrito.push(producto)
                    })
                    console.log(req.session.carrito)
                    return res.redirect('/usuario/perfil')
                }
            }).catch(errores => res.send(errores))
            
        }).catch(errores => res.send(errores))
        } else {
            //return res.send(req.body)
            return res.render('login', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    editarUsuario: (req, res) => {  
        let id = +req.params.id;
        db.Usuarios.findOne({
            where: {
                id : id,
            },
            include: [{
                all: true,
            }]
        })
        .then((usuario) => {
            //console.log(usuario);
            return res.render('editarUsuario', {
                usuario
            });
        }).catch((error)=> res.send(error));
    },
    edit: (req, res) => { 
        let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagen = {
                param: 'imagen',
                msg: req.fileValidationError,
            }
            errors.errors.push(imagen)}

            //console.log(req.body);
        if (errors.isEmpty()) {
            let id = +req.params.id
            //console.log(id);
            let {Nombres, Apellidos, dni, telefono, direccion, localidad, provincia, codPost, imagen} = req.body
            db.Usuarios.findOne({
                where:{
                    id:id
                } ,
                /* id:id */
            })
            .then((usuario) => {
                //return res.send(usuario)
                    db.Usuarios.update({
                        nombre : Nombres,
                        apellido : Apellidos,
                        dni : +dni,
                        telefono : +telefono,
                        direccion : direccion,
                        localidad : localidad,
                        provincia : provincia,
                        codPost : +codPost,
                        email : usuario.email,
                        password : usuario.password,
                        imagen : req.file ? req.file.filename : usuario.imagen,
                    }, 
                    {where:{
                            id:+req.params.id,
                        },
                    })

                .then((result) => {
                    if (req.file) {
                        if (fs.existsSync(path.join(__dirname, "../public/images/usuario", usuario.imagen)))
                        fs.unlinkSync(path.join(__dirname, "../public/images/usuario", usuario.imagen));
                    }
                    /* return res.redirect('/usuario/perfil') */
                })
                 .then(data=> {
                    db.Usuarios.findOne({where:{
                        
                        id: +req.params.id,
                    },
                
                    })
                    .then(usuario => { 
                        req.session.userLogin = {
                            id : usuario.id,
                            name : usuario.nombre,
                            lastName : usuario.apellido,
                            dni: usuario.dni,
                            telefono: usuario.telefono,
                            direccion: usuario.direccion,
                            localidad: usuario.localidad,
                            provincia: usuario.provincia,
                            codPost: usuario.codPost,
                            email : usuario.email,
                            image : usuario.imagen,
                            rol : usuario.rolId
                        }
                        if(req.cookies.TiendArgenta){
                            res.cookie('TiendArgenta','',{maxAge: -1});
                            res.cookie('TiendArgenta', req.session.userLogin, {maxAge: 1000 * 60 * 60 * 24})
                        }
                        req.session.save( (err) => {
                            req.session.reload((err) => {
                                return res.redirect('/usuario/perfil')
                            })
                }) 
             })
            })
                .catch((error) => res.send(error));
            })
            .catch((error) => res.send(error));
                }else {
        db.Usuarios.findOne({
            where: {
                id : req.params.id
            },
            include: [{
                all: true,
            }]
        })
        .then((usuario) => {
            console.log(errors.mapped());
            return res.render('editarUsuario', {
                usuario ,
                errors: errors.mapped(),
                old: req.body
            });
        }).catch((error)=> res.send(error));
    } 
},

    usuarios : (req,res) => {
        return res.render('usuario')
    },
    logout: (req,res)=>{
        req.session.destroy();
        if(req.cookies.TiendArgenta){
            res.cookie('TiendArgenta', '',{maxAge: -1})
        }
        return res.redirect('/')
    }
}