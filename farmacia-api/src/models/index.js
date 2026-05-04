const sequelize = require("../config/db");

const User = require("./user.model");
const Medicamento = require("./medicamento.model");
const Compra = require("./compra.model");
const DetalleCompra = require("./detalleCompra.model");
const Venta = require("./venta.model");
const DetalleVenta = require("./detalleVenta.model");
const Laboratorio = require("./laboratorio.model");

// Asociaciones
Compra.belongsTo(Laboratorio);
DetalleCompra.belongsTo(Compra);
DetalleCompra.belongsTo(Medicamento);

Venta.belongsTo(User);
DetalleVenta.belongsTo(Venta);
DetalleVenta.belongsTo(Medicamento);

module.exports = {
  sequelize,
  User,
  Medicamento,
  Compra,
  DetalleCompra,
  Venta,
  DetalleVenta,
  Laboratorio,
};
// 🚫 Nada más después de aquí