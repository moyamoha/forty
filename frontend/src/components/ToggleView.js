import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPeriodView } from '../state/slices/ui.slice';
import { NAKYMA } from '../utils';

export default function ToggleView() {
  const dispatch = useDispatch();
  const view = useSelector((s) => s.ui.periodView);
  const changeNakyma = (e) => {
    dispatch(setPeriodView(e.target.value));
  };
  return (
    <div className="toggle-view">
      <div className="toggle-line">
        <input
          type={'radio'}
          value={NAKYMA.CALENDAR}
          name="view-toggle"
          checked={view === NAKYMA.CALENDAR}
          onChange={changeNakyma}
        ></input>
        <label>Calendar view</label>
      </div>
      <br></br>
      <div className="toggle-line">
        <input
          type={'radio'}
          value={NAKYMA.TABLE}
          name="view-toggle"
          checked={view === NAKYMA.TABLE}
          onChange={changeNakyma}
        ></input>
        <label>Table view</label>
      </div>
    </div>
  );
}
