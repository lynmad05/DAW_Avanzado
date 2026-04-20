import Producto from "../models/Producto.js";

// ── CREAR ────────────────────────────────────────────────
export const crearProducto = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    return res.status(201).json({ ok: true, data: producto });
  } catch (error) {
    // error de validación de Mongoose → 400
    return res.status(400).json({ ok: false, mensaje: error.message });
  }
};

// ── LISTAR con paginación, filtro y ordenamiento ──────────
export const obtenerProductos = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 5,
      categoria,
      nombre,
      orden = "asc"   // "asc" precio menor a mayor, "desc" al revés
    } = req.query;

    // Construye el filtro dinámicamente
    const filtro = {};

    if (categoria) {
      // búsqueda por categoría exacta (sin importar mayúsculas)
      filtro.categoria = { $regex: categoria, $options: "i" };
    }

    if (nombre) {
      // búsqueda parcial por nombre
      filtro.nombre = { $regex: nombre, $options: "i" };
    }

    const sortPrecio = orden === "desc" ? -1 : 1;

    const productos = await Producto.find(filtro)
      .sort({ precio: sortPrecio })          // ordenar por precio
      .skip((page - 1) * limit)             // paginación: saltar registros
      .limit(Number(limit));                 // máximo por página

    const total = await Producto.countDocuments(filtro);

    return res.json({
      ok: true,
      total,
      pagina: Number(page),
      totalPaginas: Math.ceil(total / limit),
      data: productos
    });

  } catch (error) {
    return res.status(500).json({ ok: false, mensaje: "Error del servidor" });
  }
};

// ── OBTENER POR ID ────────────────────────────────────────
export const obtenerProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);

    if (!producto) {
      // el ID es válido pero no existe en BD → 404
      return res.status(404).json({ ok: false, mensaje: "Producto no encontrado" });
    }

    return res.json({ ok: true, data: producto });

  } catch (error) {
    // el ID no tiene el formato correcto de MongoDB → 400
    return res.status(400).json({ ok: false, mensaje: "ID inválido" });
  }
};

// ── ACTUALIZAR ────────────────────────────────────────────
export const actualizarProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
      // new: true → devuelve el documento ya actualizado
      // runValidators: true → aplica las validaciones del schema al actualizar
    );

    if (!producto) {
      return res.status(404).json({ ok: false, mensaje: "Producto no encontrado" });
    }

    return res.json({ ok: true, data: producto });

  } catch (error) {
    return res.status(400).json({ ok: false, mensaje: error.message });
  }
};

// ── ELIMINAR ──────────────────────────────────────────────
export const eliminarProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);

    if (!producto) {
      return res.status(404).json({ ok: false, mensaje: "Producto no encontrado" });
    }

    return res.json({ ok: true, mensaje: "Producto eliminado correctamente" });

  } catch (error) {
    return res.status(400).json({ ok: false, mensaje: "ID inválido" });
  }
};