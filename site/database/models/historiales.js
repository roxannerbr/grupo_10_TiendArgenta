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
      Historiales.belongsTo(models.Categorias,{
        as: 'categoria',
        foreignKey: 'categoriasId'
      }),
      Historiales.belongsTo(models.subCategorias,{
        as: 'subcategoria',
        foreignKey: 'subCategoriasId'
      }),
      Historiales.hasMany(models.HistorialesImagenes,{
        as: 'imagenes',
        foreignKey: 'historialesId',
        onDelete:'cascade'
      })
    }
  }
  Historiales.init({
    titulo: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    descuento: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    categoriasId: DataTypes.INTEGER,
    subCategoriasId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Historiales',
  });
  return Historiales;
};