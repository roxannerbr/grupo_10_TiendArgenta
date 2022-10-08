'use strict';
let listado = require('../../data/productos.json')

let image = []

listado.forEach(producto => {
  let imagen = {
    nombre: producto.imagen,
    productosId: producto.id,
    createdAt:new Date,
    updatedAt:new Date
  }
  image.push(imagen)
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Imagenes', image, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Imagenes', null, {});
  }
};