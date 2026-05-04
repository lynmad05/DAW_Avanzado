const { Venta, DetalleVenta, Medicamento } = require("../models");

exports.create = async (req, res) => {
  const { detalles } = req.body;

  const venta = await Venta.create();

  for (let d of detalles) {
    const med = await Medicamento.findByPk(d.MedicamentoId);

    if (!med) {
      return res.status(404).json({ msg: "Medicamento no existe" });
    }

    if (med.stock < d.cantidad) {
      return res.status(400).json({ msg: "Stock insuficiente" });
    }
    med.stock -= d.cantidad;
    await med.save();

    // detalle venta
    await DetalleVenta.create({
      MedicamentoId: d.MedicamentoId,
      cantidad: d.cantidad,
      VentaId: venta.id,
    });
  }

  return res.json(venta);
};