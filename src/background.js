'use strict'

import { app, protocol, BrowserWindow, Menu, ipcMain } from 'electron'
import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
let aboutWindow
let profileWindow
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: { secure: true, standard: true } }])

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ 
    width: 800, 
    height: 600, 
    icon: './src/assets/logo.png',
    webPreferences: {
      nodeIntegration: true
    } 
  })
  

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
  })
  win.removeMenu();
  let template = [
    {
      label: "File",
      submenu: [
        { 
          label: 'Home',
          click: function(){
            win.loadURL(process.env.WEBPACK_DEV_SERVER_URL + '');
          }
        },
        { 
          label: 'About',
          click: function(){
            newWindowTest();
          } 
        },
        { 
          label: 'Vuex Train',
          click: function(){
            win.loadURL(process.env.WEBPACK_DEV_SERVER_URL + 'VuexTrain');
          }
        }
      ]
    }
  ];
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)

  ipcMain.on('about:create', newWindowTest);
  ipcMain.on('viewProfile:view', function(e,id){
    viewProfile(id);
  });
}

function viewProfile(id){
  profileWindow = new BrowserWindow({ 
    width: 800, 
    height: 600, 
    icon: './src/assets/logo.png',
    webPreferences: {
      nodeIntegration: true
    } 
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    profileWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL + 'objectlast/' + id);
    if (!process.env.IS_TEST) profileWindow.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    profileWindow.loadURL('app://./index.html/objectlast/' + id)
  }

  profileWindow.on('closed', () => {
    profileWindow = null
  })
  profileWindow.removeMenu();
}

function newWindowTest(){
  aboutWindow = new BrowserWindow({ 
    width: 800, 
    height: 600, 
    icon: './src/assets/logo.png',
    webPreferences: {
      nodeIntegration: true
    } 
  })
  

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    aboutWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL + 'about');
    if (!process.env.IS_TEST) aboutWindow.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    aboutWindow.loadURL('app://./index.html/about')
  }

  aboutWindow.on('closed', () => {
    aboutWindow = null
  })
  aboutWindow.removeMenu();
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
  await installVueDevtools()
} catch (e) {
  console.error('Vue Devtools failed to install:', e.toString())
}

  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
