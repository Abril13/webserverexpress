const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        let salida = {
            nombre: 'Abril',
            edad: 23,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write('Hola Abril');
        res.end();

    })
    .listen(8080);
console.log('Escuchando Puerto');