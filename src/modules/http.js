const http = require('http')

http.createServer(router).listen(3000)

function router(req, res){
    console.log('nueva peticion')
    console.log(req.url)

    switch (req.url) {
        case '/hola':
            res.writeHead(201, {'Content-Type': 'text/plain'})
            res.write('Hola, que tal?')
            res.end()
            break;
    
        default:
            res.writeHead(201, {'Content-Type': 'text/plain'})
            res.write('Error 404, no se lo que quieres')
            res.end()
            break;
    }

    
    // //Escribir respuesta al usuario
    // res.write('Hola ya sé usar HTTP de node')

    // res.end()
}

console.log('Escuchando http en el puerto 3000')