function asincrona(callback) {
    setTimeout(()=>{
        try {
            let a = 3 + z
            callback(null, a)
        } catch (error) {
            callback(error)
        }
    }, 1000)
}
asincrona((err, dato)=>{
    if(err){
        console.error('Tenemos un error ' + err.message);
        // throw err
        return false
    }else{
        console.log('Todo ha ido bien ' + dato);
    }
})