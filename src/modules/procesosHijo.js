const {exec} = require('child_process')

exec('npm run consola', (err, stdout, stderror)=>{
    if(err){
    console.error(err)
    return false
    }

    console.log(stdout)
})