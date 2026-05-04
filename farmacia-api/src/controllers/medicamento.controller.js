const { Medicamento } = require("../models");

exports.create = async (req, res) => {
  try {
    const data = await Medicamento.create(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await Medicamento.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    await Medicamento.update(req.body, { where: { id: req.params.id } });
    res.json({ msg: "Actualizado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Medicamento.destroy({ where: { id: req.params.id } });
    res.json({ msg: "Eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMany = async (req, res) => {
  try {
    const data = await Medicamento.bulkCreate(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};