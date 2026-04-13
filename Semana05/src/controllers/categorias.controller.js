import { pool } from '../config/database.js';

// LISTAR
export const getCategorias = async (req, res) => {
    const [rows] = await pool.query('CALL sp_listar_categoria()');
    res.json(rows[0]);
};

// CREAR
export const createCategoria = async (req, res) => {
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({ mensaje: 'Nombre es obligatorio' });
    }

    await pool.query('CALL sp_insertar_categoria(?)', [nombre]);
    res.json({ mensaje: 'Categoría creada' });
};

// ACTUALIZAR
export const updateCategoria = async (req, res) => {
    const { nombre } = req.body;

    await pool.query('CALL sp_actualizar_categoria(?, ?)', [
        req.params.id,
        nombre
    ]);

    res.json({ mensaje: 'Categoría actualizada' });
};

// ELIMINAR
export const deleteCategoria = async (req, res) => {
    await pool.query('CALL sp_eliminar_categoria(?)', [req.params.id]);
    res.json({ mensaje: 'Categoría eliminada' });
};