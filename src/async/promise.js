function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hola ' + nombre)
            resolve(nombre)
        }, 1500);
    })

}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla')
            resolve(nombre)
        }, 1000);
    })

}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios ' + nombre)
            resolve(nombre)
        }, 1500);
    })

}


console.log('Iniciando proceso')
    hola('Diego')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log('Terminando proceso')
    })
    .catch(error=>{
        console.error('Ha habido un error' + error)
    })