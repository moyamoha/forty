const getAppDataFolder = (userName, appName, system) => {
  switch (system) {
    case "win32":
      return `C:\Users\\${userName}\\AppData\\Local\\${appName}`;
    case "darwin":
      return `~/Library/Application Support/${appName}`;
    case "linux":
      return `~/.config/${appName}`;
    default:
      return "";
  }
};

module.exports = { getAppDataFolder };
