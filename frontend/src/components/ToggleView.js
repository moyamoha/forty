import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPeriodView } from '../state/slices/ui.slice';
import { NAKYMA } from '../utils';

import '../styles/view-toggle.css';

export default function ToggleView() {
  const dispatch = useDispatch();
  const view = useSelector((s) => s.ui.periodView);
  const changeNakyma = (e) => {
    dispatch(setPeriodView(e.target.value));
  };
  return (
    <div className="toggle-view">
      <div>
        <input
          type={'radio'}
          value={NAKYMA.CALENDAR}
          name="view-toggle"
          checked={view === NAKYMA.CALENDAR}
          id="calendar-view"
          onChange={changeNakyma}
        ></input>
        <label htmlFor="calendar-view">Calendar view</label>
      </div>
      <div>
        <input
          type={'radio'}
          value={NAKYMA.TABLE}
          name="view-toggle"
          id="table-view"
          checked={view === NAKYMA.TABLE}
          onChange={changeNakyma}
        ></input>
        <label htmlFor="table-view">Table view</label>
      </div>
    </div>
  );
}
