const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.register = async (req, res) => {
  const { username, password, role } = req.body;

  const exist = await User.findOne({ where: { username } });
  if (exist) return res.status(400).json({ msg: "Usuario ya existe" });

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({ username, password: hash, role });

  res.json(user);
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });
  if (!user) return res.status(404).json({ msg: "No existe" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ msg: "Credenciales inválidas" });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET
  );

  res.json({ token });
};