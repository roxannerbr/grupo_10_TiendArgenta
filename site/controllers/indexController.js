let db = require('../database/models')
const {Op} = require("sequelize");

module.exports = {
  home: (req, res) => {
      /* trae los ultimos 4 productos */
        db.Productos.findAll({             
          limit: 4,
          order: [
            ['id', 'DESC']
          ],
         include:[
          {all:true}
        ]
          
        })
    
    .then(productos=>
      res.render("home", {productos}))
        /* return res.send(productos) */
      .catch(error => res.send(error)); 
  },
  search : (req,res) => {
    let elemento = req.query.search

    db.Productos.findAll({
        where : {
            [Op.or] : [
                {nombre : {[Op.substring] : elemento}},
                {descripcion : {[Op.substring] : elemento}}
            ]
        }
    })
    return res.render('busqueda', 
    {
        busqueda: elemento,
        resultados
    });
},
  contacto: (req, res) => {
    return res.render("contacto");
  },
  pregFrecuentes: (req, res) => {
    return res.render("pregFrecuentes");
  },
  novedades: (req, res) => {
    db.Productos.findAll({             
      limit: 8,
      order: [
        ['id', 'DESC']
      ],
      include:[
        {all:true}
      ]
      
    })

    .then(productos=>
      res.render("novedades", {productos}))
        /* return res.send(productos) */
    .catch(error => res.send(error)); 

   
  },
  indumentaria: (req, res) => {
    return res.render("indumentaria");
  },
};