'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuarios.belongsTo(models.Roles,{
        as:'rol',
        foreignKey:'rolId'
      })
      Usuarios.hasMany(models.Carritos,{
        as:'carrito',
        foreignKey:'usuariosId'
      })
    }
  }
  Usuarios.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    telefono: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    localidad: DataTypes.STRING,
    provincia: DataTypes.STRING,
    codPost: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    imagen: DataTypes.STRING,
    rolId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};