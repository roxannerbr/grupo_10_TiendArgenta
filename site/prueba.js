let listado = require('./data/productos.json')

let listadoCategorias = ['Cotillon', 'Coleccionables', 'Mujer', 'Hombre', 'Infantil']
let listadoSubCategorias = ['Camisetas', 'Pantalones', 'Accesorios', null]

let productos = []

listado.forEach(producto => {
  let categoria
  let subcategoria

  listadoCategorias.forEach((categoriaLista,index) => {
    //console.log(listadoCategorias)
    //console.log(producto.categoria)
    if (categoriaLista == producto.categoria) {
        return categoria = index + 1
    }
  });
  //console.log(categoria)

  listadoSubCategorias.forEach((elemento,index) => {
    //console.log(listadoSubCategorias)
    //console.log(producto.subcategoria)
    if (elemento == producto.subcategoria) {
        return subcategoria = index + 1
    }
  });
  //console.log(subcategoria)

  let historialProducto = {
    titulo: producto.titulo,
    stock: producto.stock,
    precio: producto.precio,
    descuento: producto.descuento,
    descripcion: producto.descripcion,
    categoriasId: categoria,
    subCategoriasId: subcategoria,
    createdAt:new Date,
    updatedAt:new Date
  }
  productos.push(historialProducto)
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Productos', productos, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Productos', null, {});
  }
};