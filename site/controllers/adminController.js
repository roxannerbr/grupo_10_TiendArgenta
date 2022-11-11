const fs = require("fs");
const path = require("path");
/* const productos = require('../data/productos.json');
const historial = require('../data/historial.json'); */

let db = require("../database/models");

const { validationResult } = require("express-validator");

module.exports = {
listar: (req, res) => {
    db.Productos.findAll({
    include: [
        {
        all: true,
        },
    ],
    })
    .then((productos) => {
    /* return res.send(productos) */
        return res.render("admin/listar", {
            productos,
            redirection: "historial",
        });
    });
},
crear: (req, res) => {
      let categorias = db.Categorias.findAll()
      let subCategoria = db.subCategorias.findAll()
      Promise.all([categorias,subCategoria])
      .then(([categorias,subCategoria]) => {
          return res.render('admin/crear',{
              categorias,
              subCategoria
          })
      })
      .catch(error => res.send(error))
},
store: (req, res) => {
    //return res.send(req.body)
    //return res.send(req.file)
    const imagen = req.file
    let errors = validationResult(req);
    if (req.fileValidationError) {
    let imagen = {
      param: "imagen",
      msg: req.fileValidationError,
    };
    errors.errors.push(imagen);
    }
    /* console.log(req.body);
    return res.send(errors.mapped()) */
    if (errors.isEmpty()) {
    let {Titulo,Categoria,subCategoria,Precio,Descuento,Stock,Descripcion,} = req.body;

    db.Productos.create({
      titulo: Titulo,
      precio: +Precio,
      descuento: +Descuento,
      stock: +Stock,
      descripcion: Descripcion,
      categoriasId: Categoria,
      subCategoriasId: subCategoria,
    })
      .then((productoNuevo) => {
        if (imagen) {
          let img = {
              nombre: imagen.filename,
              productosId: productoNuevo.id,
            };
            db.Imagenes.create(img)
            .then(imagen => {
              res.redirect('/admin/listar');
            })
        }else{
          db.Imagenes.create({
            nombre: "default-image.png",
            productosId: productoNuevo.id,
          })
          .then(imagen => {
            return res.redirect("/admin/listar");
          });
        }
      })
      .catch((error) => res.send(error));
    } else {
    id = +req.params.id;
    let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', '..', 'public', 'images', 'productos', dato));
    
    if (imagen) {
      if (ruta(imagen.filename) && (imagen.filename !== "default-img.png")) {
          fs.unlinkSync(path.join(__dirname, '../../public/img/productos', imagen.filename));
      }
    }
    //let producto = productos.find((product) => product.id === id);
    //return res.send(errors.mapped())
    let categorias = db.Categorias.findAll()
      let subCategoria = db.subCategorias.findAll()
      Promise.all([categorias,subCategoria])
      .then(([categorias,subCategoria]) => {
          return res.render('admin/crear',{
              categorias,
              subCategoria,
              errors: errors.mapped(),
              old: req.body,
          })
      })
      .catch(error => res.send(error))
    
    }
},

  editar: (req, res) => {
    let idParams = +req.params.id;
    let categorias = db.Categorias.findAll();
    let subcategoria = db.subCategorias.findAll()
    let producto = db.Productos.findOne({
      where: {
        id: idParams,
      },
      include: [
        {
          all: true,
        },
      ],
    });
    Promise.all([categorias, subcategoria, producto])
      .then(([categorias, subcategoria, producto]) => {
        return res.render("admin/editar", {
            producto,
            subcategoria,
            categorias,
        });
      })
      .catch((error) => res.send(error));
  },
  update: (req, res) => {
    let errors = validationResult(req);
    if (req.fileValidationError) {
      let imagen = {
        param: "imagen",
        msg: req.fileValidationError,
      };
      errors.errors.push(imagen);
    }
    /* console.log(req.boy);
        return res.send(errors.mapped()) */
  if (errors.isEmpty()) {
      let id = +req.params.id;
      let {
        Titulo,
        Categoria,
        subCategoria,
        Precio,
        Descuento,
        Stock,
        Descripcion
      } = req.body;

      let producto = db.Productos.findOne({
        where: {
          id: id,
        },
        include:[{
          all:true
        }],
      });

    let actualizacion = db.Productos.update({
        titulo: Titulo,
        precio: +Precio,
        descuento: +Descuento,
        stock: +Stock,
        descripcion: Descripcion,
        categoriasId: Categoria,
        subcategoriasId: subCategoria,
    },
    {where: {
        id: id,
        },
    });
    Promise.all([producto, actualizacion])
    .then(([producto, actualizacion]) => {
        let imagen1;
        /* imagen 1 */
        //console.log(req.file);
        if (req.file){
          db.Imagenes.update({
            nombre: req.file.filename,
            },
            {where: {
                id: producto.imagenes[0].id,
            },
          });
            /* para borrar la img anterior */
            let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', 'public', 'images', 'productos', dato))
            producto.imagenes.forEach(imagen => {
                if (ruta(imagen.nombre) && (imagen.nombre !== "default-image.png")) {
                    fs.unlinkSync(path.join(__dirname, '..', 'public', 'images', 'productos', imagen.nombre))
                }
            })
            return res.redirect('/admin/listar')
            } else {
              return res.redirect('/admin/listar')
        }
    })
      .catch((error) => res.send(error));
  }else {
    return res.render('admin/crear', {
            errors: errors.mapped(),
            old: req.body
    })
  } 
},
destroy: (req, res) => {
    let id = +req.params.id;

    db.Productos.findOne({
      where: {
        id: id,
      },
      include: [{
          all: true,
      }],
    })
    .then(producto => {
        db.Historiales.create({
          titulo: producto.titulo,
          precio: producto.precio,
          descuento: producto.descuento,
          stock: producto.stock,
          descripcion: producto.descripcion,
          categoriasId: producto.categoriasId,
          subCategoriasId: producto.subCategoriasId,
        })
        .then(historial => {
            db.HistorialesImagenes.create({
              nombre: producto.imagenes[0].nombre,
              historialesId: historial.id,
            })
            .then(imagen => {
              db.Productos.destroy({
                where: {
                  id: id,
                },
              })
              .then(producto => {
                res.redirect('/admin/historial');              
              })
            })
        })
    })
    .catch((error) => res.send(error));
          
},
  historial: (req, res) => {
    db.Historiales.findAll({
      include: [{
          all: true,
        }],
    })
      .then((historial) => {
        /* return res.send(historial) */
        return res.render("admin/listar", {
          productos: historial,
          redirection: "listar",
        });
      })
      .catch((error) => res.send(error));
  },
restore: (req, res) => {
    let id = +req.params.id;

    db.Historiales.findOne({
      where: {
        id: id,
      },
      include: [{
          all: true,
        }]
    })
    .then(historialProducto => {
        db.Productos.create({
          titulo: historialProducto.titulo,
          precio: historialProducto.precio,
          descuento: historialProducto.descuento,
          stock: historialProducto.stock,
          descripcion: historialProducto.descripcion,
          categoriasId: historialProducto.categoriasId,
          subCategoriasId: historialProducto.subCategoriasId,
        })
        .then(productoNuevo => {
          let imagen = db.Imagenes.create({
            nombre: historialProducto.imagenes[0].nombre,
            productosId: productoNuevo.id,
          })
          .then((imagen) => {
            db.Historiales.destroy({
              where: {
                id: id,
              }
            })
            .then(eliminar => {
              return res.redirect("/admin/listar");
            })
          })
        })
      })
      .catch((error) => res.send(error));
  },
  crash: (req, res) => {
    let id = +req.params.id;

    db.Historiales.findOne({
        where: {
          id: id
        },
        include: [{
            all: true
        }]
    })
    .then(producto => {

      let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', 'public', 'images', 'productos', dato))
      producto.imagenes.forEach(imagen => {
          if (ruta(imagen.nombre) && (imagen.nombre !== "default-image.png")) {
              fs.unlinkSync(path.join(__dirname, '..', 'public', 'images', 'productos', imagen.nombre))
          }
      })
    })
        
      
        db.Historiales.destroy({
            where: {
              id: id
            }
        })
        .then(eliminar => {
          return res.redirect("/admin/listar");
        })
      .catch((error) => res.send(error));
  },
};