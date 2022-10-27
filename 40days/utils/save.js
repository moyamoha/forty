const { writeFile } = require("fs/promises");
const { getAppDataFolder } = require("./get-data-folder");
const os = require("os");
const { app } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

const save = async (data) => {
  const dataFilePath = isDev
    ? "data/data.json"
    : path.join(
        getAppDataFolder(os.userInfo().username, app.name, process.platform),
        "data.json"
      );
  await writeFile(dataFilePath, JSON.stringify(data));
};

module.exports = save;
