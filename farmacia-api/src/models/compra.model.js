// compra.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Compra = sequelize.define("Compra", {});

module.exports = Compra;