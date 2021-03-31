console.time('todo')
let suma = 0
console.time('bucle')

for (let i = 0; i < 1000000000; i ++) {
    suma ++
    
}
console.timeEnd('bucle')
console.time('asincrono')

asincrona()
.then(()=>{
    console.timeEnd('asincrono')
})

console.timeEnd('todo')
console.log('Empieza el async')

function asincrona() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Termina el proceso asincrono')
            resolve()
        })
    })
}