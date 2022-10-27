const express = require("express");
const { setMarkStatus } = require("../controllers/mark.controller");
const readData = require("../middlewares/readData");

const mRouter = express.Router();

mRouter.patch("/change-status/:pid/:mid", readData, setMarkStatus)

module.exports = mRouter