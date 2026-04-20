import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import conectarDB from "./config/db.js";
import productoRoutes from "./routes/productoRoutes.js";

dotenv.config(); // carga las variables del archivo .env

const app = express();

// conectar a MongoDB
conectarDB();

// middlewares globales
app.use(cors());            // permite peticiones de otros orígenes
app.use(morgan("dev"));     // muestra en consola: GET /api/productos 200 5ms
app.use(express.json());    // parsea el body de las peticiones como JSON

// rutas
app.use("/api/productos", productoRoutes);

// puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});