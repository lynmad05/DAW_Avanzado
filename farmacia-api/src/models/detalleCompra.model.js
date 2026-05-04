// detalleCompra.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const DetalleCompra = sequelize.define("DetalleCompra", {
  cantidad: DataTypes.INTEGER,
});

module.exports = DetalleCompra;