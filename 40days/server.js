const express = require("express");
const http = require("http");
const pRoute = require("./routers/period.route");
const cors = require("cors");
const hRouter = require("./routers/habit.route");
const mRouter = require("./routers/mark.route");
const portfinder = require("portfinder");

const app = express();
portfinder.setBasePort(4000);
portfinder.setHighestPort(5000);

const createServer = async (port) => {
  const server = app.listen(port, function () {
    console.log(`The app is listening to port ${port}`);
  });
  app.use(express.json()).use(cors());
  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  app.use("/periods", pRoute);
  app.use("/habits", hRouter);
  app.use("/marks", mRouter);
  return server;
};

async function startServer() {
  let port = 0;
  try {
    port = await portfinder.getPortPromise();
    return createServer(port);
  } catch (e) {
    return createServer(6100);
  }
}

module.exports = { startServer };
