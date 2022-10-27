import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import PeriodOptions from './PeriodOptions';
import { getPeriodStartAndEnd } from '../utils';
import { setSelectedPeriod } from '../state/slices/data.slice';

import '../styles/period-link.css';

export default function PeriodLink({ period }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function gotoPeriodPage() {
    dispatch(setSelectedPeriod(period));
    navigate(`/home/${period.name}`);
  }
  const getPeriodClassName = () => {
    const now = new Date();
    const vali = getPeriodStartAndEnd(period);
    console.table(vali);
    if (now < vali.start) return 'period-link-cont pending-link';
    if (now > vali.end) return 'period-link-cont over-link';
    return 'period-link-cont ongoing-link';
  };

  const getHabitsText = (habits) => {
    const tulos = habits.map((h) => h.title).join(', ');
    return tulos.length > 30
      ? {
          value: tulos.substring(0, 30),
          truncated: true,
        }
      : { value: tulos, truncated: false };
  };
  return (
    <div className={getPeriodClassName()}>
      <span className="link" onClick={gotoPeriodPage}>
        {period.name}
      </span>
      <span>{getPeriodStartAndEnd(period).start.toLocaleDateString()}</span>
      <span>-</span>
      <span>{getPeriodStartAndEnd(period).end.toLocaleDateString()}</span>
      <span>
        Habits:{' '}
        {getHabitsText(period.habits).truncated ? (
          <>
            <span>{getHabitsText(period.habits).value}</span>
            <span style={{ cursor: 'pointer', color: 'blue' }} onClick={gotoPeriodPage}>
              {' '}
              ...<i>see more</i>
            </span>
          </>
        ) : (
          <span>{getHabitsText(period.habits).value}</span>
        )}
      </span>
      <PeriodOptions period={period}></PeriodOptions>
    </div>
  );
}
