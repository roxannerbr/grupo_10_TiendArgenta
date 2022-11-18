/* Dotenv */
require('dotenv').config()
//const createError = require('http-errors');

/* Livereload */
const livereload = require('livereload');
const liveReloadServer = livereload.createServer();

/* Entry point */
const express = require('express');
const app = express();
const port = 3012;
const connectLivereload = require('connect-livereload');
const path = require('path');
const cookieParser = require('cookie-parser');
const methodOverride=require('method-override');
const session= require ('express-session');

/* implementamos locals dentro la app */
const userLogin= require('./middlewares/userLoginCheck');
const dbConnectionTest = require('./middlewares/dbConnectionTest')

/*Requerir Rutas */
const indexRouter = require('./routes/index')
const adminRouter = require('./routes/admin')
const productosRouter = require('./routes/productos')
const usuariosRouter = require('./routes/usuario')

/* Archivos estaticos monitoreados */
liveReloadServer.watch(path.join(__dirname, 'public'));
app.use(connectLivereload());

dbConnectionTest()

/* Trabajar con metodos HTTP (post) */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//PUT Y DELETE
app.use(methodOverride('_method'));

/* login e inicio de sesion */
app.use(session({
  secret:"TiendArgenta"}));

app.use(userLogin);

app.use(cookieParser());

//View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs')

//Middlewares
app.use(express.json()); //si se usa JSON CLASE54
app.use(express.static(path.resolve(__dirname,'public')));

//Rutas
app.use("/", indexRouter);
app.use("/usuario", usuariosRouter);
app.use("/productos", productosRouter);
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
app.use(function(req, res, next) {
  res.status(404).render('404');
}); 

/* Levantamos el servidor con app listen */
app.listen(port,function(){
    return console.log(`Se levanta el servidor en http://localhost:${port}`)
});

