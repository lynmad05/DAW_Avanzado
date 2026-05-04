const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/medicamentos", require("./routes/medicamento.routes"));
app.use("/api/compras", require("./routes/compra.routes"));
app.use("/api/ventas", require("./routes/venta.routes"));

module.exports = app;