const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//contenido estatico
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
// Express HBS engine para renderizar las paginas

app.set('view engine', 'hbs');

//todas las peticiones / entran este callback
app.get('/', function(req, res) {
    res.render('home', {
        nombre: "Daniela"
    });
});

app.get('/about', (req, res) => {
    //res.send('Esta es mi primera web app');
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});