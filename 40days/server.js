const express = require("express");
const http = require("http");
const pRoute = require("./routers/period.route");
const cors = require("cors");
const hRouter = require("./routers/habit.route");
const mRouter = require("./routers/mark.route");

const app = express();
function startServer() {
  const server = app.listen(4000, () => {
    console.log("App is listening to port " + 4000);
  });

  app.use(express.json()).use(cors());
  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  app.use("/periods", pRoute);
  app.use("/habits", hRouter);
  app.use("/marks", mRouter);

  return server;
}

module.exports = { startServer };
