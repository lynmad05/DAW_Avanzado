const http = require('http');
const repo = require('./repository/studentsRepository');

const PORT = 4000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    const { method, url } = req;

    if (url === '/students' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify(repo.getAll()));
    }

    else if (url.startsWith('/students/') && method === 'GET') {
        const id = parseInt(url.split('/')[2]);
        const student = repo.getById(id);
        if (student) {
            res.statusCode = 200;
            res.end(JSON.stringify(student));
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ message: 'Estudiante no encontrado' }));
        }
    }

    else if (url === '/students' && method === 'POST') {
        let body = '';
        req.on('data', chunk => (body += chunk));
        req.on('end', () => {
            const data = JSON.parse(body);
            const newStudent = repo.create(data);
            if (newStudent) {
                res.statusCode = 201;
                res.end(JSON.stringify(newStudent));
            } else {
                res.statusCode = 400;
                res.end(JSON.stringify({ 
                    message: 'Faltan campos: name, email, course, phone son obligatorios' 
                }));
            }
        });
    }

    // POST listar por estado
    else if (url === '/ListByStatus' && method === 'POST') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
        const { status } = JSON.parse(body);
        const result = repo.listByStatus(status);
        res.statusCode = 200;
        res.end(JSON.stringify(result));
    });
}

    // POST listar por promedio
    else if (url === '/ListByGrade' && method === 'POST') {
        let body = '';
        req.on('data', chunk => (body += chunk));
        req.on('end', () => {
            const { grade } = JSON.parse(body);
            const result = repo.listByGrade(grade);
            res.statusCode = 200;
            res.end(JSON.stringify(result));
        });
    }

    else if (url.startsWith('/students/') && method === 'PUT') {
        const id = parseInt(url.split('/')[2]);
        let body = '';
        req.on('data', chunk => (body += chunk));
        req.on('end', () => {
            const updatedStudent = repo.update(id, JSON.parse(body));
            if (updatedStudent) {
                res.statusCode = 200;
                res.end(JSON.stringify(updatedStudent));
            } else {
                res.statusCode = 404;
                res.end(JSON.stringify({ message: 'Estudiante no encontrado' }));
            }
        });
    }

    else if (url.startsWith('/students/') && method === 'DELETE') {
        const id = parseInt(url.split('/')[2]);
        const deleted = repo.remove(id);
        if (deleted) {
            res.statusCode = 200;
            res.end(JSON.stringify(deleted));
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ message: 'Estudiante no encontrado' }));
        }
    }

    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Ruta no encontrada' }));
    }
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});