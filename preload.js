const fs = require('fs')
const {
  contextBridge,
  ipcRenderer,
  ipcMain
} = require("electron");


contextBridge.exposeInMainWorld(
  "api", {
  temp: false,
  send: (channel, data) => {
    // whitelist channels
    let validChannels = ["get-printers", "app_version"];
    if (validChannels.includes(channel)) {
      console.log(channel);
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel, func) => {
    let validChannels = ["list-printers", "app_version"];
    if (validChannels.includes(channel)) {
      console.log(channel);
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  }
}
);

