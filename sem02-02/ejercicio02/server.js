const http = require("http");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");


handlebars.registerHelper('gt', (a, b) => a > b); 

const PORT = 3000;

function renderView(res, viewName, data) {
    const filePath = path.join(__dirname, "views", viewName);
    fs.readFile(filePath, "utf8", (err, templateData) => {
        if (err) {
            res.statusCode = 500;
            res.end("Error interno del servidor");
            return;
        }
        const template = handlebars.compile(templateData);
        const html = template(data);
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(html);
    });
}

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        renderView(res, "home.hbs", {
            title: "Servidor con Handlebars 🚀",
            welcomeMessage: "Bienvenido al laboratorio de Node.js",
            day: new Date().toLocaleDateString("es-PE"),
            students: ["Ana", "Luis", "Pedro", "Maria"],
        });

    } else if (req.url === "/about") {
        renderView(res, "about.hbs", {
            title: "Acerca de la clase",
            curso: "Desarrollo de Aplicaciones Web Avanzado",
            profesor: "Coello Palomino, Ricardo",
            fecha: new Date().toLocaleDateString("es-PE"),
            seccion: "5 - C24 - Sección C-D",
        });

    } else if (req.url === "/students") {
        renderView(res, "students.hbs", {
            title: "Lista de Estudiantes",
            students: [
                { nombre: "Ana", nota: 18 },
                { nombre: "Luis", nota: 12 },
                { nombre: "Pedro", nota: 16 },
                { nombre: "Maria", nota: 10 },
                { nombre: "Ailyn", nota: 19 },
                { nombre: "Jorge", nota: 14 },
            ],
        });

    } else {
        res.statusCode = 404;
        res.end("<h1>404 - Página no encontrada</h1>");
    }
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});