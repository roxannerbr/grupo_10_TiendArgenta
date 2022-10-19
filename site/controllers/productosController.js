/* let productos = require('../data/productos.json') */
/* let db=require('../database/models') */
//HOME NEW PRODUCTS
/* let detalles = productos.slice(productos.length-4) */
let db = require('../database/models')
let Sequelize = require('sequelize')

module.exports = {
   
    detalles : (req,res) => {
        let idParams = +req.params.id
        db.Productos.findOne({
            where:{
                id:idParams
            },
            include:[{all:true}]
        })
        .then(producto=>{
            db.Productos.findAll({
                where:{
                    categoriasId: producto.categoriasId
                },
                limit:4,
                order:[[Sequelize.literal('RAND()')]],
                include:[{
                    all:true
                }]
            })
            .then(productos=>{
            /* return res.send(productos) */
            return res.render('detalles',{
                producto,
                productos
            })
        })
        .catch(error=>res.send(error))
    })
},
    
    carrito : (req,res) => {
        //return res.send('Hola!!!')
        return res.render('carrito')
        
        // Cuenta el número de veces que se repite el producto
       let agregarCarrito = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
    },
    categoria :(req,res)=>{
        console.log(req.params.categoria);
        let categoriaSeleccionada = req.params.categoria
        /* let categoria = ['Cotillon', 'Coleccionables', 'Mujer', 'Hombre', 'Infantil'] */
        
        /* productoPorCategoria = productos.filter(producto =>{
            return producto.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase()
        }) */
        db.Categorias.findOne({
            where:{
                nombre:categoriaSeleccionada
            },
            include:[{
                association:'productos',
                include:[{
                    all:true
            }] 
        }]
        })
        .then(categorias=>{
            //return res.send(categorias)
            return res.render('productos',{
                categorias
            })
        })
        .catch(error=>res.send(error))
    }
}