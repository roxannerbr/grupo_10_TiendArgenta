const {sequelize} = require('../database/models')

const dbConectionTest = async () => {
    try {
        await sequelize.authenticate()
        console.log('La conexion fue establecida con exito');
    } catch (error) {
        console.log('No pudimos conectarnos con la base de datos',error);
    }
}

module.exports = dbConectionTest