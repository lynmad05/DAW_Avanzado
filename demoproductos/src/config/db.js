import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado: bd_productos");
  } catch (error) {
    console.error("Error de conexión:", error.message);
    process.exit(1); // detiene el servidor si no hay BD
  }
};

export default conectarDB;