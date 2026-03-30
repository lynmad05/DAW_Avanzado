const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

const URL = "https://jsonplaceholder.typicode.com/users";

async function obtenerDatos() {
    const response = await axios.get(URL);
    return response.data;
}

function crearTabla(titulo, datos) {
    return `
    <div class="card">
        <h2>${titulo}</h2>
        <table>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Usuario</th>
                <th>Email</th>
                <th>Ciudad</th>
            </tr>
            ${datos.map(user => `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.address?.city || "N/A"}</td>
                </tr>
            `).join("")}
        </table>
    </div>
    `;
}

app.get("/", async (req, res) => {
    const data = await obtenerDatos();

    const f1 = data.filter(u => u.id <= 5);
    const f2 = data.filter(u => u.address?.city === "McKenziehaven");
    const f3 = data.filter(u => u.company?.name.includes("Group"));
    const f4 = data.filter(u => u.email.includes(".biz"));
    const f5 = data.filter(u => u.username.length > 5);

    res.send(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Filtros JSON</title>
<style>
body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: #0f172a;
    color: #e2e8f0;
}
header {
    background: #020617;
    padding: 20px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
}
.container {
    padding: 20px;
    display: flex;
    flex-direction: column; /* <-- Esto hace que las tarjetas estén en columna */
    gap: 20px;
}
.card {
    background: #1e293b;
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.4);
}
.card h2 {
    margin-bottom: 10px;
    font-size: 18px;
    color: #38bdf8;
}
table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
}
th {
    background: #334155;
    padding: 8px;
}
td {
    padding: 6px;
    border-bottom: 1px solid #475569;
}
tr:hover {
    background: #334155;
}
</style>
</head>
<body>

<header>Filtros de Usuarios (JSON)</header>

<div class="container">
${crearTabla("ID <= 5", f1)}
${crearTabla("Ciudad: McKenziehaven", f2)}
${crearTabla("Empresa contiene 'Group'", f3)}
${crearTabla("Email con .biz", f4)}
${crearTabla("Username mayor a 5", f5)}
</div>

</body>
</html>
`);
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});