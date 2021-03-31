//Para crear variables de entorno desde el editor se usa la siguiente sintaxis
let nombre = process.env.NOMBRE || "No has definido ningun nombre"
//El nombre ya debe ser definido desde la consola usando "NOMBRE="El nombre que queramos" antes de correr el archivo"
//Ejemplo "NOMBRE="Diego" npm run conceptos"
process.NOMBRE
console.log('Hola, ' + nombre)