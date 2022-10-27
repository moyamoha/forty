import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedPeriod } from '../state/slices/data.slice';
import { setShowPeriodForm } from '../state/slices/ui.slice';

export default function CreatePeriodLink() {
  const dispatch = useDispatch();
  const navigateToForm = () => {
    dispatch(setSelectedPeriod(null));
    dispatch(setShowPeriodForm(true));
  };
  return (
    <div>
      <span onClick={navigateToForm} style={createPeriodStyle}>
        Create new Spell
      </span>
    </div>
  );
}

const createPeriodStyle = {
  cursor: 'pointer',
  color: 'violet',
  textDecoration: 'underline',
};
