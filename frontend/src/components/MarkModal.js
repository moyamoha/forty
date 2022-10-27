import React from 'react';
import { isEqualIgnoreTime } from '../utils';
import CloseModalBtn from './CloseModalBtn';
import EditableMark from './EditableMark';

import '../styles/mark-modal.css';

export default function MarkModal({ date, period, setShowModal }) {
  const closeModalFunction = () => {
    setShowModal(false);
  };
  return (
    <div className="mark-modal">
      <span style={{ marginBottom: '30px' }}>Marks for this day: </span>
      <hr></hr>
      <CloseModalBtn closeFunc={closeModalFunction}></CloseModalBtn>
      {period.habits.map(function (h) {
        const mark = period.marks.find(
          (m) => m.habitId === h.id && isEqualIgnoreTime(date, new Date(m.date))
        );
        return (
          <div className="mark-modal-line" key={mark.id}>
            <span>{h.title}</span>
            <EditableMark mark={mark}></EditableMark>
          </div>
        );
      })}
    </div>
  );
}
