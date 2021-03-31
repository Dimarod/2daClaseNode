function otraFuncion(params) {
    return seRompe()
}

function seRompe() {
    return 3 + o    
    
}

//Para funciones asincronas lo mas factible es meter el try catch dentro de las funcion asincrona
function asincrona(cb) {
    setTimeout(()=>{
        try{
        return 3 + z
        }catch(err){
            console.error('Ha habido un error')
            cb(err)
        }
    })
    
}
try {
    asincrona((err)=>{
        console.error(err.message)
    })
} catch (err) {
    console.error('Vaya, algo no ha ido bien')
    console.error(err.message)
}

