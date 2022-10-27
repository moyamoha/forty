const express = require("express");
const { addHabit, removeHabit, changeHabitTitle } = require("../controllers/habit.controller");
const readData = require("../middlewares/readData")

const hRouter = express.Router()

hRouter.post("/:pid", readData, addHabit)
hRouter.delete("/:pid/:hid", readData, removeHabit)
hRouter.patch("/:pid/:hid", readData, changeHabitTitle)

module.exports = hRouter;