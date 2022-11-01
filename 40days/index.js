const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const { existsSync, appendFileSync, mkdirSync } = require("fs");
const os = require("os");

const { getAppDataFolder } = require("./utils/get-data-folder");
const { startServer } = require("./server");

const gotTheLock = app.requestSingleInstanceLock();
let win;
let server = null;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      contextIsolation: false,
    },
  });
  win.loadURL(
    isDev
      ? "http:/127.0.0.1:3000"
      : `file:/${path.join(__dirname)}/html/index.html`
  );
  win.setMenuBarVisibility(false);
  win.setIcon(`${path.join(__dirname)}/assets/40.jpg`);
};

const whenReady = async () => {
  try {
    await app.whenReady();
    server = await startServer();
    const appDataFolder = getAppDataFolder(
      os.userInfo().username,
      app.name,
      process.platform
    );
    const dataFilePath = isDev
      ? "data/data.json"
      : `${path.join(appDataFolder, "data.json")}`;
    if (!existsSync(dataFilePath)) {
      mkdirSync(appDataFolder, { recursive: true });
      appendFileSync(dataFilePath, JSON.stringify([]));
    }
    createWindow();
  } catch (e) {}
};

if (!gotTheLock) {
  app.quit();
} else {
  app.on("second-instance", (event) => {
    if (win) {
      if (win.isMinimized()) win.restore();
    }
    win.focus();
  });
  whenReady();
  app.on("window-all-closed", () => {
    app.quit();
    server.close();
  });
}
