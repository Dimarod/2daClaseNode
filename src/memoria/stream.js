const fs = require('fs')
const stream = require('stream')
const util = require('util')

//stream de lectura

let data = ''

let readableStream = fs.createReadStream(__dirname + '/input.txt')
readableStream.setEncoding('UTF8')
 readableStream.on('data', (chunk)=>{
     //Para archivos grandes
     data += chunk
 })

 readableStream.on('end', ()=>{
     console.log(data)
 })

 //Stream de escritura

 process.stdout.write('Hola, ')
 process.stdout.write('qué ')
 process.stdout.write('tal? ')

 const transform = stream.Transform

 function mayus() {
     transform.call(this)
 }
 util.inherits(mayus, transform)

 mayus.prototype._transform = function (chunk, cod, cb) {
     chunkMayus = chunk.toString().toUpperCase()
     console.log(mayus)
     this.push(chunkMayus)
     cb()
 }

 let Mayus = new mayus()

 readableStream.pipe(Mayus)
 .pipe(process.stdout)