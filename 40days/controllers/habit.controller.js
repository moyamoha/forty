const Habit = require("../entities/habit.entity");
const save = require("../utils/save");

const addHabit = async (req, res) => {
  const periodId = req.params["pid"];
  const { title } = req.body;
  if (!title) {
    res.sendStatus(400);
    return;
  }
  const parsed = req.parsed;
  const habit = new Habit(title);
  const p = parsed.find((p) => p.id === periodId);
  p.addHabit(habit);
  await save(parsed);
  res.json(parsed);
};

const removeHabit = async (req, res) => {
  const hid = req.params["hid"];
  const pid = req.params["pid"];
  const parsed = req.parsed;
  const period = parsed.find((p) => p.id === pid);
  if (!period) {
    res.sendStatus(404);
    return;
  }
  period.deleteHabit(hid);
  await save(parsed);
  res.json(parsed);
};

const changeHabitTitle = async (req, res) => {
  const hid = req.params["hid"];
  const pid = req.params["pid"];
  const parsed = req.parsed;
  const period = parsed.find((p) => p.id === pid);
  const { title } = req.body;
  if (!period || !title) {
    res.sendStatus(404);
    return;
  }
  period.editHabitTitle(hid, title);
  await save(parsed);
  res.json(parsed);
};

module.exports = { addHabit, removeHabit, changeHabitTitle };
