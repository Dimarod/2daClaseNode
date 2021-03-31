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

async function main() {
    let nombre = await hola('Diego')
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
}

console.log('Iniciando proceso')
main()
console.log('Terminando proceso')