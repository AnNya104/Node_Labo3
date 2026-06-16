const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Armando David',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', { titulo: 'Pagina Generica' });
});

app.get('/elements', (req, res) => {
    res.render('elements', { titulo: 'Pagina de Elementos' });
});

app.use((req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto: ' + port);
});