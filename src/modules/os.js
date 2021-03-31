const os = require('os')
//Arquitectura
console.log(os.arch())
//sistema operativo
console.log(os.platform())
//Numero de nucleos
console.log(os.cpus())
//Constantes
console.log(os.constants)
//Memoria disponible
console.log(os.freemem())
//Saber cual es el directorio raiz
console.log(os.homedir())
//Directorio de temporales
console.log(os.tmpdir())
//Hostname
console.log(os.hostname())
//Interfaz de red
console.log(os.networkInterfaces())