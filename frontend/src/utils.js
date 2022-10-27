import { addDays } from 'date-fns';

export function getStatusText(num) {
  const statusObj = {
    '-1': 'UNDONE',
    1: 'DONE',
    0: 'EMPTY',
  };
  return statusObj[`${num}`];
}

export function isEqualIgnoreTime(left, right) {
  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
}

export const NAKYMA = Object.freeze({
  TABLE: 'TABLE',
  CALENDAR: 'CALENDAR',
});

export function getPeriodStartAndEnd(period) {
  const start = new Date(period.startDate);
  const end = addDays(start, 39);
  return {
    start: start,
    end: end,
  };
}

export function getStatusEmoji(status) {
  const s = {
    1: '✅',
    '-1': '❌',
    0: '⭕',
  };
  return s[status + ''];
}
