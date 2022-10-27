import EditableMark from './EditableMark';
import { isEqualIgnoreTime } from '../utils';

export default function PeriodTableRow({ habits, marks, date }) {
  return (
    <tr>
      <td>{date.toLocaleDateString()}</td>
      {habits.map(function (h) {
        let mark = null;
        mark = marks.find((m) => m.habitId === h.id && isEqualIgnoreTime(date, new Date(m.date)));
        return (
          <td>
            <EditableMark mark={mark}></EditableMark>
          </td>
        );
      })}
    </tr>
  );
}
