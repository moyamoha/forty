const { v4: uuidv4 } = require("uuid");
const markStatus = require("./mark-status.enum");

class Mark {
  constructor(habitId, date) {
    this.id = uuidv4().replaceAll("-", "");
    this.habitId = habitId;
    this.date = date;
    this.status = markStatus.EMPTY;
  }

  copyFromObject(obj) {
    this.id = obj.id;
    this.habitId = obj.habitId;
    this.date = new Date(obj.date);
    this.status = obj.status;
    return this;
  }

  setStatus(status) {
    if (markStatus.hasStatus(status)) {
      this.status = status;
    } else {
      throw new Error("Status should be in range -1 - 1");
    }
  }
}

module.exports = Mark;
