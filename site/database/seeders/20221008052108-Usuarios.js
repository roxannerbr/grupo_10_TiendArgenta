'use strict';

let listado = require('../../data/users.json')

let usuarios = listado.map(usuario => {
  let elemento = {
    nombre: usuario.Nombres,
    apellido: usuario.Apellidos,
    dni: usuario.dni,
    telefono: usuario.telefono,
    direccion: usuario.direccion,
    localidad: usuario.localidad,
    provincia: usuario.provincia,
    codPost: usuario.codPost,
    email: usuario.email,
    password: usuario.pass,
    imagen: usuario.imagen,
    rolId: usuario.category === 'admin' ? '1' : '2',
    createdAt:new Date,
    updatedAt:new Date
  }
  return elemento
})
//console.log(usuarios)

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Usuarios', usuarios, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Usuarios', null, {});
  }
};