const { v4: uuidv4 } = require("uuid");
const addDays = require("date-fns/addDays");
const Habit = require("./habit.entity");
const markStatus = require("./mark-status.enum");
const Mark = require("./mark.entity");

class Period {
  constructor(name, startDate) {
    this.id = uuidv4().replaceAll("-", "");
    this.startDate = new Date(startDate);
    this.name = name;
    this.habits = [];
    this.marks = [];
  }

  copyFromObject(obj) {
    this.id = obj.id;
    this.startDate = new Date(obj.startDate);
    this.name = obj.name;
    this.habits = obj.habits.map((h) => new Habit().copyFromObject(h));
    this.marks = obj.marks.map((m) => new Mark().copyFromObject(m));
    return this;
  }

  addHabit(habit) {
    this.habits.push(habit);
    for (let i = 0; i < 40; i++) {
      const m = new Mark(habit.id, addDays(new Date(this.startDate), i));
      this.marks.push(m);
    }
  }

  deleteHabit(hid) {
    const index = this.habits.findIndex((h) => h.id === hid);
    this.habits.splice(index, 1);
    // Also deleting marks related to that habit
    this.marks = this.marks.filter((m) => m.habitId !== hid);
  }

  editMark(habitId, date, status) {
    const mark = this.marks.find(
      (m) => m.habitId === habitId && dateEqualsIgnoreTime(date, m.date)
    );
    if (markStatus.hasStatus(status)) mark.status = status;
    else throw new Error("Unknown status");
  }

  editHabitTitle(hid, newTitle) {
    const habit = this.habits.find((h) => h.id === hid);
    if (!habit) return;
    habit.setTitle(newTitle);
  }

  setName(newName) {
    this.name = newName;
  }
}

module.exports = Period;
