const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data)=>{
        cb(data.toString())
    })
}

leer(__dirname + '/file1.txt', console.log)

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err)=>{
        (err)
        ?console.log('No he podido escribirlo')
        :console.log('Se ha escrito correctamente')
    })
}

// escribir(__dirname + '/file1.txt', 'Soy un nuevo archivo', console.log)

function borrar(ruta, cb) {
    fs.unlink(ruta, cb)
    
}

borrar(__dirname + '/file1.txt', console.log)