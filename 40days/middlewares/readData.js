const { readFile } = require("fs/promises");
const Period = require("../entities/period.entity");
const { getAppDataFolder } = require("../utils/get-data-folder");
const os = require("os");
const { app } = require("electron");
const path = require("path");
const electronIsDev = require("electron-is-dev");

const readData = async (req, res, next) => {
  const appDataFolder = electronIsDev
    ? "data"
    : getAppDataFolder(os.userInfo().username, app.name, process.platform);
  const dataFilePath = `${path.join(appDataFolder, "data.json")}`;
  const buffer = await readFile(dataFilePath, "utf8");
  const parsed = JSON.parse(buffer.toString());
  req.parsed = parsed.map((p) => new Period().copyFromObject(p));
  next();
};

module.exports = readData;
