const express = require("express");
const { addPeriod, removePeriod, getPeriods, editPeriodName, getPeriod } = require("../controllers/period.controller");
const readData = require("../middlewares/readData");

const pRoute = express.Router()
pRoute.use(readData)
pRoute.get("/", getPeriods)
pRoute.get("/:id", getPeriod)
pRoute.post("/", addPeriod)
pRoute.delete("/:id", removePeriod)
pRoute.patch("/change-name/:id", editPeriodName)

module.exports = pRoute