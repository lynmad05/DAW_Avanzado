const express = require('express');
const axios = require('axios');
const csv = require('csv-parser');
const { Readable } = require('stream');

const app = express();

let resultados = []; //aquí se guardan los datos

async function cargarCSV() {
    const response = await axios.get(
        'https://raw.githubusercontent.com/cs109/2014_data/master/countries.csv'
    );

    const stream = Readable.from(response.data);

    stream
        .pipe(csv())
        .on('data', (data) => resultados.push(data))
        .on('end', () => {
            console.log("CSV cargado correctamente");
        });
}

cargarCSV();

// ENDPOINT 1: TODOS LOS PAÍSES
app.get('/paises', (req, res) => {
    res.json(resultados);
});

// ENDPOINT 2: BUSCAR POR NOMBRE
app.get('/paises/:nombre', (req, res) => {
    const nombre = req.params.nombre;

    const filtrado = resultados.filter(p =>
        p.Country.toLowerCase() === nombre.toLowerCase()
    );

    res.json(filtrado);
});

// INICIAR SERVIDOR
app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});
