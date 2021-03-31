function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('bla bla bla')
        callbackHablar()
    }, 1000);
}

function hola(nombre, callback) {
    setTimeout(() => {
        console.log('Hola ' + nombre)
        callback(nombre)
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios ' + nombre)
        otroCallback()
    }, 1500);
}

function conversacion(nombre, veces, nuevoCallback) {
    if (veces > 0) {
        hablar(() => {
            conversacion(nombre, --veces, nuevoCallback)
        })
    } else {
        nuevoCallback(nombre, nuevoCallback)
    }
}

console.log('Iniciando proceso')
hola("Carlos", (nombre) => {
    conversacion(nombre, 3, ()=>{
        adios(nombre, ()=>{console.log('Terminando proceso')
    })
        
    })
})