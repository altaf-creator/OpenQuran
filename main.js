const { app, BrowserWindow, ipcMain, shell } = require('electron')
const path = require('path')

const nativeImage = require('electron').nativeImage;
var icon = nativeImage.createFromPath(__dirname + '/src/images/favicon.png');

icon.setTemplateImage(true);

var isMaximized = false;

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 600,
        minHeight: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js')
        },
        autoHideMenuBar: true,
        titleBarStyle: 'hiddenInset',
        frame: false,
        icon: icon
    })

    win.loadFile('index.html')
    
    win.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: 'deny' };
    });
    

    ipcMain.on('max', () => {
        if (isMaximized) {
            win.restore()
            isMaximized = false;
        } else {
            win.maximize()
            isMaximized = true;
        }
    })

    ipcMain.on('min', () => {
        win.minimize()
    })
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})