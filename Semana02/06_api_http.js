const http = require('http');
const { alumno } = require('./alumno');

const server = http.createServer((req, res) => {
    const ruta = req.url;

    if (ruta === '/') {
        return res.end('Bienvenido a mi API');
    }

    if (ruta === '/alumno') {
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(alumno));
    }

    res.statusCode = 404;
    return res.end('Recurso no encontrado');
});

server.listen(3000, () => {
    console.log('Servidor conectado');
});