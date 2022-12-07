'use strict';

let listado = ['Camisetas', 'Pantalones', 'Accesorios', 'Otros' ]

let subCategorias = listado.map(subcategoria => {
  let elemento = {
    nombre: subcategoria,
    createdAt:new Date,
    updatedAt:new Date
  }
  return elemento
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('SubCategorias', subCategorias, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('SubCategorias', null, {});
  }
};