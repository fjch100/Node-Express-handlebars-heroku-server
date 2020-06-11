const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = 3000;
let counter = 0;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Main Page',
        nombre: 'Felix'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        titulo: 'About Page',
        nombre: 'Felix'
    })
});


/*
app.get('/', (req, res) => {
    counter++;
    //res.send(`Hola mundo desde ${req.url}, counter:${counter}`);
    //console.log('counter', counter);
    let salida = {
        nombre: 'Felix',
        edad: 50,
        url: req.url,
        counter
    };
    res.send(salida);
});
*/

app.listen(port, () => { console.log(`escuchando en el puerto: ${port}, counter: ${counter}`) });