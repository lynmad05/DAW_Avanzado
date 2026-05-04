import db from "../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const User = db.user;
const Role = db.role;
const RefreshToken = db.refreshToken;

/**
 * ERROR RESPONSE
 */
const errorResponse = (res, status, message, details = null) => {
  return res.status(status).json({
    success: false,
    message,
    ...(details && { details })
  });
};

/**
 * EMAIL VALIDATION
 */
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/**
 * CREATE REFRESH TOKEN
 */
const createRefreshToken = async (user) => {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 7);

  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET
  );

  const refreshToken = await RefreshToken.create({
    token,
    userId: user.id,
    expiryDate
  });

  return refreshToken.token;
};

/**
 * SIGNUP
 */
export const signup = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;
    if (!username || !email || !password) {
      return errorResponse(res, 400, "Faltan campos obligatorios");
    }
    const user = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, 10)
    });

    let roleList;

    if (roles && roles.length > 0) {
      roleList = await Role.findAll({ where: { name: roles } });
    } else {
      roleList = [await Role.findOne({ where: { name: "user" } })];
    }

    await user.setRoles(roleList);

    return res.json({
      message: "Usuario creado"
    });

  } catch (err) {
    return errorResponse(res, 500, "Error signup", err.message);
  }
};

/**
 * SIGNIN
 */
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    // ✅ VALIDACIÓN OBLIGATORIA
    if (!email || !password) {
      return errorResponse(res, 400, "Faltan campos requeridos: email y password");
    }

    const user = await User.findOne({
      where: { email },
      include: Role
    });

    if (!user) {
      return errorResponse(res, 404, "Usuario no encontrado");
    }

    const passwordValid = bcrypt.compareSync(password, user.password);

    if (!passwordValid) {
      return errorResponse(res, 401, "Password incorrecto");
    }

    const accessToken = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const refreshToken = await createRefreshToken(user);

    return res.json({
      accessToken,
      refreshToken
    });

  } catch (err) {
    return errorResponse(res, 500, "Error login", err.message);
  }
};
/**
 * REFRESH TOKEN
 */
export const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(403).json({ message: "Token requerido" });
    }

    const storedToken = await RefreshToken.findOne({
      where: { token: refreshToken }
    });

    if (!storedToken) {
      return res.status(403).json({ message: "Token inválido" });
    }

    if (new Date() > storedToken.expiryDate) {
      return res.status(403).json({ message: "Token expirado" });
    }

    const newAccessToken = jwt.sign(
      { id: storedToken.userId },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({
      accessToken: newAccessToken
    });

  } catch (err) {
    return res.status(500).json({
      message: "Error refresh",
      error: err.message
    });
  }
};

/**
 * LOGOUT (INVALIDAR REFRESH TOKEN)
 */
export const logout = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ message: "Token requerido" });
    }

    await RefreshToken.destroy({
      where: { token: refreshToken }
    });

    return res.json({
      message: "Logout exitoso. Token eliminado"
    });

  } catch (err) {
    return res.status(500).json({
      message: "Error logout",
      error: err.message
    });
  }
};