const http = require("http");

const estudiante = {
    nombre: "Ailyn Medina",
    carrera: "Desarrollo Web Avanzado",
    año: 2026
};

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(`<h1>Saludo personalizado</h1>`);
    res.write(`<p>Hola estudiante: ${estudiante.nombre}</p>`);
    res.write(`<p>Carrera: ${estudiante.carrera}</p>`);
    res.write(`<p>Año actual: ${estudiante.año}</p>`);
    res.end();
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});