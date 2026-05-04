// src/models/user.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  username: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
  role: DataTypes.ENUM("ADMIN", "VENDEDOR", "ALMACEN"),
});

module.exports = User;