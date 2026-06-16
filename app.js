const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app     = express();
const port    = process.env.PORT || 3000;

// Motor de plantillas
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials'); // usar parciales
// Archivos estáticos
app.use(express.static('public'));

// ── Rutas ──────────────────────────────────────
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Armando David',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', { titulo: 'Página Genérica' });
});

app.get('/elements', (req, res) => {
    res.render('elements', { titulo: 'Página de Elementos' });
});

// ── Comodín: siempre al final ──────────────────
app.use((req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});