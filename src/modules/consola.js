console.log('algo')
console.info('algo')
console.error('algo')
console.warn('algo')
var tabla = [
    {
        a:1,
        b:'Z'
    },
    {
        a:'o',
        b:3
    }
]

console.table(tabla)

console.group('Conversacion:')
console.log('Hola')
console.log('algo')
console.log('algo')
console.log('Adios')
console.groupEnd('Final')


// console.log: recibe cualquier tipo y lo muestra en el consola.
// console.info: es equivalente a log pero es usado para informar.
// console.error: es equivalente a log pero es usado para errores.
// console.warn: es equivalente a log pero es usado para warning.
// console.table: muestra una tabla a partir de un objeto.
// console.count: inicia un contador autoincremental.
// console.countReset: reinicia el contador a 0.
// console.time: inicia un cronometro en ms.
// console.timeEnd: Finaliza el cronometro.
// console.group: permite agrupar errores mediante identación.
// console.groupEnd: finaliza la agrupación.
// console.clear: Limpia la consola.