const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

const Contenido = sequelize.define( 'Contenido', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true,
    },
    poster : {
        type : DataTypes.STRING(255),
        allowNull : false
    },
    titulo : {
        type: DataTypes.STRING(255),
        allowNull : false
    },
    categoria : {
        type : DataTypes.STRING(255),
        allowNull : false
    },
    genero : {
        type : DataTypes.STRING(255),
        allowNull : false
    }, 
    resumen : {
        type : DataTypes.STRING(1000),
        allowNull : false
    },
    temporadas: {
        type : DataTypes.INTEGER,
        default : 0
    },
    reparto : {
        type : DataTypes.STRING(300),
        allowNull : false
    },
    trailer: {
        type : DataTypes.STRING(300),
        allowNull : true
    }
}, {
    tableName : 'contenidos',
    timestamps : false
});

module.exports = Contenido;