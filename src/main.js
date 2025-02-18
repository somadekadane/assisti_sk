// console.log("Processo principal")

const { app, BrowserWindow, nativeTheme } = require('electron')

//Janela principal
let win
const createWindow = () => {
    // a linha baixo define o tema(claro ou escuro)
    nativeTheme.themeSource = "dark" // (dark ou light)
    win = new BrowserWindow({
        width: 800,
        height: 600,
        //autoHideMenuBar: true,
        //minimizable: false,
        resizable: false
    })

    win.loadFile('./src/views/index.html')
}

//Iniciar a aplicação
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

//combatibilizar com o MAC
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


