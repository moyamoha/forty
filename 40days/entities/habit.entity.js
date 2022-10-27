const { v4: uuidv4 } = require("uuid");

class Habit {
  constructor(title) {
    this.title = title;
    this.id = uuidv4().replaceAll("-", "");
  }

  copyFromObject(obj) {
    this.id = obj.id;
    this.title = obj.title;
    return this;
  }

  setTitle(nTitle) {
    this.title = nTitle;
  }
}

module.exports = Habit;
