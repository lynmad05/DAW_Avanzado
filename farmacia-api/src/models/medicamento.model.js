const { DataTypes } = require("sequelize"); // 👈 FALTABA ESTO
const sequelize = require("../config/db");

const Medicamento = sequelize.define("Medicamento", {
  nombre: DataTypes.STRING,
  precio: DataTypes.FLOAT,
  stock: DataTypes.INTEGER,
});

module.exports = Medicamento;