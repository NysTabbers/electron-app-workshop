const { app, BrowserWindow, ipcMain } = require('electron/main')

const path = require('node:path');

let userInfo = {
  clicks: 0,
  gold: 0
};

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'js/preload.js')
    }
  })

  win.loadFile('html/index.html')
}

app.whenReady().then(() => {
  createWindow();
})

ipcMain.handle('get-state', () => {
  return userInfo;
});

ipcMain.on('update-userInfo', (event, newUserInfo) => {
  gameState = { ...userInfo, ...newUserInfo };
});