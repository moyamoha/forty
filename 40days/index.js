const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const { existsSync, appendFileSync, mkdirSync } = require("fs");
const os = require("os");

const { getAppDataFolder } = require("./utils/get-data-folder");
const { startServer } = require("./server");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
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
};

let server = null;
app.whenReady().then(() => {
  server = startServer();
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
});

app.on("window-all-closed", () => {
  app.quit();
  server.close();
});
