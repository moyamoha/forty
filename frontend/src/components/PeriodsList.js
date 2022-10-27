import React from 'react';
import { useSelector } from 'react-redux';
import CreatePeriodLink from './CreatePeriodLink';
import PeriodLink from './PeriodLink';

export default function PeriodsList() {
  const content = useSelector((s) => s.data.content);
  return (
    <div>
      {content.length > 0 ? (
        <div style={pList}>
          <strong>All your created spells</strong>
          {content.map((p) => {
            return <PeriodLink key={p.id} period={p}></PeriodLink>;
          })}
          <CreatePeriodLink></CreatePeriodLink>
        </div>
      ) : (
        <div style={pList}>
          <span>No data yet</span>
          <CreatePeriodLink></CreatePeriodLink>
        </div>
      )}
    </div>
  );
}

const pList = {
  paddingLeft: '20px',
  paddingRight: '20px',
  marginTop: '30px',
  display: 'flex',
  gap: '5px',
  flexDirection: 'column',
};
