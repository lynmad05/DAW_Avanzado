// detalleVenta.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const DetalleVenta = sequelize.define("DetalleVenta", {
  cantidad: DataTypes.INTEGER,
});

module.exports = DetalleVenta;