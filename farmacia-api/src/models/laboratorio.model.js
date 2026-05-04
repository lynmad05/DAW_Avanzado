const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Laboratorio = sequelize.define("Laboratorio", {
  nombre: DataTypes.STRING,
});

module.exports = Laboratorio;