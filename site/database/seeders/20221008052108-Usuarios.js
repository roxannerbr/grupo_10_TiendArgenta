'use strict';

let listado = require('../../data/users.json')

let usuarios = listado.map(usuario => {
  let elemento = {
    nombre: usuario.Nombres,
    apellido: usuario.Apellidos,
    dni: usuario.dni,
    telefono: usuario.telefono,
    email: usuario.Correo,
    password: usuario.pass,
    imagen: usuario.imagen,
    rolId: usuario.category === 'admin' ? 'admin' : 'usuario',
    createdAt:new Date,
    updatedAt:new Date
  }
  return elemento
})
console.log(usuarios)

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Usuarios', usuarios, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Usuarios', null, {});
  }
};