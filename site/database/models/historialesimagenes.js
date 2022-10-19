'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HistorialesImagenes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      HistorialesImagenes.belongsTo(models.Historiales,{
        as: 'historial',
        foreignKey: 'historialesId',
        onDelete:'cascade'
      })
    }
  }
  HistorialesImagenes.init({
    nombre: DataTypes.STRING,
    productosId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HistorialesImagenes',
  });
  return HistorialesImagenes;
};