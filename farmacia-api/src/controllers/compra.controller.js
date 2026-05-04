const { Compra, DetalleCompra, Medicamento } = require("../models");

exports.create = async (req, res) => {
  const { detalles } = req.body;

  const compra = await Compra.create();

  for (let d of detalles) {
    await DetalleCompra.create({
      ...d,
      CompraId: compra.id,
    });

    const med = await Medicamento.findByPk(d.MedicamentoId);
    med.stock += d.cantidad;
    await med.save();
  }

  res.json(compra);
};