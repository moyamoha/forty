import React, { useState } from 'react';
import Calendar from 'react-calendar';

import { getPeriodStartAndEnd } from '../utils';
import MarkModal from './MarkModal';

import 'react-calendar/dist/Calendar.css';

export default function CalendarView({ period }) {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const handleDateChange = (e) => {
    setDate(e);
    setShowModal(true);
  };
  return (
    <>
      <Calendar
        defaultView="month"
        maxDetail="month"
        value={date}
        onChange={handleDateChange}
        minDate={getPeriodStartAndEnd(period).start}
        maxDate={getPeriodStartAndEnd(period).end}
        locale="fi-FI"
      ></Calendar>
      <p>activities for the selected spell</p>
      <ul>
        {period.habits.map((h) => (
          <li key={h.id}>{h.title}</li>
        ))}
      </ul>
      {showModal ? (
        <MarkModal date={date} period={period} setShowModal={setShowModal}></MarkModal>
      ) : (
        <></>
      )}
    </>
  );
}
