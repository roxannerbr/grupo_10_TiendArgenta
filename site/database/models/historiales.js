'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historiales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Historiales.init({
    titulo: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    categoriasId: DataTypes.INTEGER,
    subCategoriasId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Historiales',
  });
  return Historiales;
};