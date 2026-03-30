const express = require("express");
const axios = require("axios");
const csv = require("csvtojson");

const app = express();
const PORT = 3001;

const URL = "https://people.sc.fsu.edu/~jburkardt/data/csv/airtravel.csv";

async function obtenerDatosCSV() {
    const response = await axios.get(URL);
    return await csv().fromString(response.data);
}

function crearTabla(titulo, datos) {
    return `
    <div class="card">
        <h2>${titulo}</h2>
        <table>
            <tr>
                <th>Mes</th>
                <th>1958</th>
                <th>1959</th>
                <th>1960</th>
            </tr>
            ${datos.map(d => `
                <tr>
                    <td>${d.Month}</td>
                    <td>${d["1958"]}</td>
                    <td>${d["1959"]}</td>
                    <td>${d["1960"]}</td>
                </tr>
            `).join("")}
        </table>
    </div>
    `;
}

app.get("/", async (req, res) => {
    const data = await obtenerDatosCSV();

    const f1 = data.filter(d => parseInt(d["1958"]) > 300);
    const f2 = data.filter(d => parseInt(d["1959"]) < 400);
    const f3 = data.filter(d => d.Month.startsWith("J"));
    const f4 = data.filter(d => parseInt(d["1960"]) > 500);
    const f5 = data.filter(d => d.Month.length <= 4);

    res.send(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Filtros CSV</title>
<style>
* { box-sizing: border-box; }
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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

<header>Filtros de Datos CSV</header>

<div class="container">
${crearTabla("1958 > 300", f1)}
${crearTabla("1959 < 400", f2)}
${crearTabla("Mes inicia con J", f3)}
${crearTabla("1960 > 500", f4)}
${crearTabla("Mes corto", f5)}
</div>

</body>
</html>
`);
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});