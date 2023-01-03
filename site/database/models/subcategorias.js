'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subCategorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      subCategorias.hasMany(models.Productos,{
        as: 'productos',
        foreignKey: 'subCategoriasId'
      })
      subCategorias.hasMany(models.Historiales,{
        as: 'historiales',
        foreignKey: 'subCategoriasId'
      })
    }
  }
  subCategorias.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subCategorias',
  });
  return subCategorias;
};