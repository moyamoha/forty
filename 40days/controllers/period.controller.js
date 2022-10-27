const Period = require("../entities/period.entity");
const { writeFile } = require("fs/promises");
const save = require("../utils/save");

const getPeriods = (req, res) => {
  res.json(req.parsed);
};

const getPeriod = (req, res) => {
  const parsed = req.parsed;
  const found = parsed.find((p) => p.id === req.params["id"]);
  if (!found) {
    res.sendStatus(404);
    return;
  }
  res.json(found);
};

const addPeriod = async (req, res) => {
  const parsed = req.parsed;
  const { name, startDate } = req.body;
  if (!name || !startDate) {
    res.sendStatus(400);
    return;
  }
  const newPeriod = new Period(name, new Date(startDate));
  parsed.push(newPeriod);
  await save(parsed);
  res.json(newPeriod);
};

const removePeriod = async (req, res) => {
  const parsed = req.parsed;
  const index = parsed.findIndex((p) => p.id === req.params["id"]);
  if (index === -1) {
    res.sendStatus(404);
    return;
  }
  parsed.splice(index, 1);
  await save(parsed);
  res.sendStatus(204);
};

const editPeriodName = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.sendStatus(400);
    return;
  }
  const parsed = req.parsed;
  const editable = parsed.find((p) => p.id === req.params["id"]);
  if (!editable) {
    res.sendStatus(404);
    return;
  }
  editable.setName(req.body.name);
  await save(parsed);
  res.json(parsed);
};

module.exports = {
  addPeriod,
  removePeriod,
  getPeriods,
  editPeriodName,
  getPeriod,
};
