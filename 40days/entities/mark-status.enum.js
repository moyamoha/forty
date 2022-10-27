const markStatus = Object.freeze({
  EMPTY: 0,
  UNDONE: -1,
  DONE: 1,

  hasStatus(status) {
    return (
      status === this.DONE || status === this.EMPTY || status === this.UNDONE
    );
  },
});

module.exports = markStatus;
