import { Router } from "express";
import {
  crearProducto,
  obtenerProductos,
  obtenerProducto,
  actualizarProducto,
  eliminarProducto
} from "../controllers/productoController.js";

const router = Router();

router.post("/", crearProducto);           // POST   /api/productos
router.get("/", obtenerProductos);         // GET    /api/productos
router.get("/:id", obtenerProducto);       // GET    /api/productos/:id
router.put("/:id", actualizarProducto);    // PUT    /api/productos/:id
router.delete("/:id", eliminarProducto);   // DELETE /api/productos/:id

export default router;