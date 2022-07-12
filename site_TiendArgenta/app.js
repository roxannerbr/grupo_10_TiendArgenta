/* Livereload */
const livereload = require('livereload');
const liveReloadServer = livereload.createServer();

/* Entry point */
const express = require('express')
const path = require('path')

const app = express()
const port = 3012

/* Archivos estaticos */
app.use(express.static(path.resolve(__dirname,'public')))

/* Archivos estaticos monitoreados */


/* Rutas */
app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','home.html')))
app.get('/login',(req,res) => res.sendFile(path.resolve(__dirname,'views','login.html')))
app.get('/register',(req,res) => res.sendFile(path.resolve(__dirname,'views','register.html')))
app.get('/detalles',(req,res) => res.sendFile(path.resolve(__dirname,'views','detalles.html')))
app.get('/carrito',(req,res) => res.sendFile(path.resolve(__dirname,'views','carrito.html')))

/* Funcion de actualizacion del servidor */


/* Levantamos el servidor con app listen */
app.listen(port,function(){
    return console.log(`Se levanta el servidor en http://localhost:${port}`)
})
