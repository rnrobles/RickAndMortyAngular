
const { app, BrowserWindow, ipcMain, ipcRenderer, webContents } = require("electron");
const path = require("path");
const { PosPrinter } = require('electron-pos-printer');
const electron = require('electron');
const squirrelUrl = "https://test.rnrobles.online";

let appWin;

ipcMain.on("message", (event) => event.reply("reply", "pong"));
ipcMain.on("get-printers", (event) => event.reply("list-printers", appWin.webContents.getPrinters()));

ipcMain.on('app_version', (event) => {
  event.sender.send('app_version', { version: app.getVersion() });
});


createWindow = () => {
  appWin = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Angular and Electron",
    resizable: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, "preload.js") // use a preload script

    }
  });

  appWin.loadFile("./dist/examenAngular/index.html");

  appWin.webContents.openDevTools();

  appWin.on("closed", () => {
    appWin = null;
  });
}

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});



function handleSquirrelEvent(application) {
  if (process.argv.length === 1) {
    return false;
  }

  const ChildProcess = require('child_process');
  const path = require('path');

  const appFolder = path.resolve(process.execPath, '..');
  const rootAtomFolder = path.resolve(appFolder, '..');
  const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
  const exeName = path.basename(process.execPath);

  const spawn = function (command, args) {
    let spawnedProcess, error;

    try {
      spawnedProcess = ChildProcess.spawn(command, args, {
        detached: true
      });
    } catch (error) { }

    return spawnedProcess;
  };

  const spawnUpdate = function (args) {
    return spawn(updateDotExe, args);
  };

  const squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
    case '--squirrel-install':
    case '--squirrel-updated':
      // Optionally do things such as:
      // - Add your .exe to the PATH
      // - Write to the registry for things like file associations and
      //   explorer context menus

      // Install desktop and start menu shortcuts
      spawnUpdate(['--createShortcut', exeName]);

      setTimeout(application.quit, 1000);
      return true;

    case '--squirrel-uninstall':
      // Undo anything you did in the --squirrel-install and
      // --squirrel-updated handlers

      // Remove desktop and start menu shortcuts
      spawnUpdate(['--removeShortcut', exeName]);

      setTimeout(application.quit, 1000);
      return true;

    case '--squirrel-obsolete':
      // This is called on the outgoing version of your app before
      // we update to the new version - it's the opposite of
      // --squirrel-updated

      application.quit();
      return true;
  }
};

if (handleSquirrelEvent(app)) {
  // squirrel event handled and app will exit in 1000ms, so don't do anything else
  return;
}



const startAutoUpdater = (squirrelUrl) => {
  // The Squirrel application will watch the provided URL
  electron.autoUpdater.setFeedURL(`${squirrelUrl}/installers/`);

  // Display a success message on successful update
  electron.autoUpdater.addListener("update-downloaded", (event, releaseNotes, releaseName) => {
    electron.dialog.showMessageBox({ "message": `The release ${releaseName} has been downloaded` });
  });

  // Display an error message on update error
  electron.autoUpdater.addListener("error", (error) => {
    electron.dialog.showMessageBox({ "message": "Auto updater error: " + error });
  });

  // tell squirrel to check for updates
  electron.autoUpdater.checkForUpdates();
}


app.on('ready', function () {
  //if (process.env.NODE_ENV == undefined) process.env.NODE_ENV = "dev"
if (process.env.NODE_ENV !== "dev") startAutoUpdater(squirrelUrl)
});
