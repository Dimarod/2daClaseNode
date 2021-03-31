const crypt = require('bcrypt')


const pass = '1234segura!'

//cifrar contraseñas
crypt.hash(pass, 5, (err, hash)=>{
    console.log(hash)
    
    //Nos dice si la contraseña pudo o no haber generado ese hash
crypt.compare(pass, hash, (err, res)=>{
    console.log(res)
})
})

