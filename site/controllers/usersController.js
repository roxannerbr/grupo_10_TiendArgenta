const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')
/* const bcrypt = require('bcryptjs') */
const usuarios = require('../data/users.json')
/* const { emitWarning } = require('process') */
const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/users.json')
    , JSON.stringify(dato, null, 4), 'utf-8')

module.exports = {
    login : (req,res) => {
        return res.render('login')
    },
    processLogin: (req,res)=>{
        return res.send(req.body)
    },
    register : (req,res) => {
        return res.render('register')
    },
    processRegister: (req,res)=>{
        let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagen = {
                param: 'image',
                msg: req.fileValidationError,
            }
            errors.errors.push(imagen)
        }
        if (errors.isEmpty()) {
            let {name, lastName, birth, gender, email,password, address, category} = req.body
            let usuarioNuevo = {
                id:usuarios[usuarios.length - 1].id + 1,
                name,
                lastName,
                birth,
                gender,
                email,
                password,
                address,
                category,
                image: req.file.size > 1 ? req.file.filename : "login.jpg"
            }
            usuarios.push(usuarioNuevo)
            guardar(usuarios)

            return res.redirect('/')
        } else {

            let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', 'public', 'images', 'users', dato))
            if (ruta(req.file.filename) && (req.file.filename !== "default-image.png")) {
                fs.unlinkSync(path.join(__dirname, '..', 'public', 'images', 'users', req.file.filename))
            }
            
            /* return res.send(errors.mapped()) */
            return res.render('users/register', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },

    usuarios : (req,res) => {
        return res.render('usuarios')
    }
}