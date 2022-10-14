const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
/*const usuarios = require('../data/users.json');
const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/users.json')
    , JSON.stringify(dato, null, 4), 'utf-8')*/

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
            let {Nombres, Apellidos, dni, telefono, direccion, localidad, provincia,codPost, email, pass} = req.body
            
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
                imagen: req.file > 1 ? req.file.filename : "login.png"
                
            })
            /* let usuarioNuevo = {
                id:usuarios[usuarios.length - 1].id + 1,
                Nombres: Nombres,
                Apellidos: Apellidos,
                dni: "",
                gender: "",
                email: email,
                pass:bcrypt.hashSync(pass,10),
                address: "",
                provincia: "",
                localidad: "",
                category: "user",
                imagen: req.file ? req.file.filename : "login.png"
            }
            usuarios.push(usuarioNuevo)
            guardar(usuarios) */

            .then(usuario => {
                
                req.session.userLogin = {
                    id : usuario.id,
                    name : usuario.Nombres,
                    lastName : usuario.Apellidos,
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
                return res.redirect('/')
            })
            .catch(errores => res.send(errores))
            
        } else {
            //este codigo estaba comentado---eliminamos imagen
            /* let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', '..', 'public', 'images', 'usuario', dato))
            
            if (ruta(req.file.filename) && (req.file.filename !== "login.png")) {
                fs.unlinkSync(path.join(__dirname, '..', '..', 'public', 'images', 'usuario', req.file.filename))//supuestamente esto eliminaria la imagen
            } */
            
            /* return res.send(errors.mapped()) */
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
            /* let usuario = usuarios.find(user => user.email === email) */
            db.Usuarios.findOne({
                where : {
                    email
                }
            })
            .then(usuario => {
                
                req.session.userLogin = {
                    id : usuario.id,
                    name : usuario.Nombres,
                    lastName : usuario.Apellidos,
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
                res.cookie('TiendAr',req.session.userLogin,{maxAge: 1000 * 60 * 60 * 24})
            }
            /* console.log(req.session.userLogin); */
            return res.redirect('/usuario/perfil')
            /* return res.send(req.body) */
            })
            .catch(errores => res.send(errores))
        } else {
            //return res.send(req.body)
            return res.render('login', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    editarUsuario: (req, res) => {        
        return res.render('editarUsuario')
    },
    edit: (req, res) => { 
        return res.send(imagen);
        /*  if (errors.isEmpty()) {
             let usuarioModificado = {
                 dni: dni,
                 telefono: telefono,
                 gender: gender,
                 address: address,
                 imagen: req.file ? req.file.filename : "login.png"
             } 
             guardar(usuarioModificado)
 
             return res.redirect('/')}
       console.log(usuarios); 
     return res.send(usuarioModificado)  */ 
        let id = +req.params.id
        let {Nombres, Apellidos, dni, telefono, gender, imagen, pass, address, category} = req.body
         let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagen = {
                param: 'imagen',
                msg: req.fileValidationError,
            }
            errors.errors.push(imagen)}
        if (errors.isEmpty()) {
            usuarios.forEach(usuario => {
                if (usuario.id === id) {
                    usuario.Nombres = Nombres
                    usuario.Apellidos = Apellidos
                    usuario.dni = +dni
                    usuario.telefono = +telefono
                    usuario.direccion = direccion
                    usuario.localidad = localidad 
                    usuario.provincia = provincia
                    usuario.codPost = +codPost
                    usuario.gender = gender
                    usuario.pass = usuario.pass
                    usuario.email = usuario.email
                    usuario.address = address
                    usuario.imagen = req.file ? req.file.filename : imagen
                }})
                guardar(usuarios)
            return res.redirect('/')
        } else {
            return res.render('editarUsuario', {
                errors: errors.mapped(),
                old: req.body
            })}

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