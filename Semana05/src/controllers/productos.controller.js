import { pool } from '../config/database.js';

// LISTAR
export const getProductos = async (req, res) => {
    const [rows] = await pool.query('CALL sp_listar_productos()');
    res.json(rows[0]);
};

// POR ID
export const getProducto = async (req, res) => {
    const [rows] = await pool.query(
        'SELECT * FROM productos WHERE id=?',
        [req.params.id]
    );

    if (rows.length === 0) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    res.json(rows[0]);
};

// CREAR
export const createProducto = async (req, res) => {
    const { nombre, precio, stock, categoria_id } = req.body;

    if (!nombre) {
        return res.status(400).json({ mensaje: 'Nombre obligatorio' });
    }

    if (precio <= 0) {
        return res.status(400).json({ mensaje: 'Precio debe ser mayor a 0' });
    }

    if (stock < 0) {
        return res.status(400).json({ mensaje: 'Stock no puede ser negativo' });
    }

    await pool.query('CALL sp_insertar_producto(?, ?, ?, ?)', [
        nombre,
        precio,
        stock,
        categoria_id
    ]);

    res.json({ mensaje: 'Producto creado' });
};

// ACTUALIZAR
export const updateProducto = async (req, res) => {
    const { nombre, precio, stock, categoria_id } = req.body;

    await pool.query('CALL sp_actualizar_producto(?, ?, ?, ?, ?)', [
        req.params.id,
        nombre,
        precio,
        stock,
        categoria_id
    ]);

    res.json({ mensaje: 'Producto actualizado' });
};

// ELIMINAR
export const deleteProducto = async (req, res) => {
    await pool.query('CALL sp_eliminar_producto(?)', [req.params.id]);
    res.json({ mensaje: 'Producto eliminado' });
};