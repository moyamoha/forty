import React, { useMemo } from 'react';
import PeriodTableRow from './PeriodTableRow';
import addDays from 'date-fns/addDays';

export default function PeriodTable({ period }) {
  const nums = useMemo(() => {
    return '0'
      .repeat(40)
      .split('')
      .map((o, i) => parseInt(o) + i);
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="data-col">Days/Actions</th>
          {period.habits.length > 0 ? period.habits.map((h) => <th>{h.title}</th>) : null}
        </tr>
      </thead>
      <tbody>
        {nums.map(function (i) {
          const date = addDays(new Date(period.startDate), i);
          return (
            <PeriodTableRow
              marks={period.marks}
              habits={period.habits}
              date={date}
            ></PeriodTableRow>
          );
        })}
      </tbody>
    </table>
  );
}
