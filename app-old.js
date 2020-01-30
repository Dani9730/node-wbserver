const http = require('http');
//crearemos un servidor mediante un callback de request y respuestas
http.createServer((req, res) => {
    //se conffigura el puerto, aqui regresaremos un json
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
            nombre: 'Daniela',
            edad: 22,
            url: req.url
        }
        //salida JSON.stringify
    res.write(JSON.stringify(salida));
    //res.write("Hola Mundo, desde nodeJS!");
    res.end();
}).listen(8085);

console.log("Escuchando en el puerto 8085");