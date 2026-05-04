import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./models/index.js";
import helmet from "helmet";

dotenv.config();

const app = express();

app.use(helmet());
app.disable("x-powered-by");

// middlewares base
app.use(cors());
app.use(express.json());

// detectar entorno
const isDev = process.env.NODE_ENV === "development";

// sincronización BD
await db.sequelize.sync({
  force: false
});

// roles iniciales
const count = await db.role.count();

if (count === 0) {
  await db.role.bulkCreate([
    { id: 1, name: "user" },
    { id: 2, name: "moderator" },
    { id: 3, name: "admin" }
  ]);
  console.log("Roles creados");
}

// rutas
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";

authRoutes(app);
userRoutes(app);

// middleware de errores (SIEMPRE AL FINAL)
app.use(errorHandler);

// puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log(`Modo: ${process.env.NODE_ENV}`);
});