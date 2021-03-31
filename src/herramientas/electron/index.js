const {app, BrowserWindow} = require('electron')

let mainWindow;

//Con esta accion estaremos atentos a si el proceso está listo para mandarlo a llamar o ejecutarlo
app.on('ready', createWindow)

//Creamos la ventana de la app
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    })

    //Cargamos la ventana

    mainWindow.loadFile('index.html')

}