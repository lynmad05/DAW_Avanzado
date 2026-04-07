const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const webRoutes = require('./routes/web');
app.use('/', webRoutes);

// 404
app.use((req, res) => {
    res.status(404).render('index');
});

// Servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});