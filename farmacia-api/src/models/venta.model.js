// venta.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Venta = sequelize.define("Venta", {});

module.exports = Venta;