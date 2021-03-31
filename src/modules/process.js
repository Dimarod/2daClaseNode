// const process = require('process')

process.on('beforeExit', ()=>{
    console.log('El proceso esta por acabar')
})

process.on('exit', ()=>{
    console.log('El proceso acabo')
    setTimeout(()=>{
        console.log('Esto no va a salir nunca')
    }, 0)
    
})

process.on('uncaughtException', (err, origin)=>{
    console.log('Se nos ha olvidado capturar un error')
    setTimeout(()=>{
        console.log('Esto viene de las excepciones')
    }, 1000)
})

// funcion()

console.log('Esto si el error no se captura no sale')