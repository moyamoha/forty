import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FocusTrap from 'focus-trap-react';

import { setShowPeriodForm } from '../state/slices/ui.slice';
import { setSelectedPeriod } from '../state/slices/data.slice';
import { createNewPeriod, editPeriodName } from '../state/api/perios.api';
import CloseModalBtn from './CloseModalBtn';

import '../styles/period-modal.css';

export default function PeriodModal() {
  const dispatch = useDispatch();
  const period = useSelector((s) => s.data.selectedPeriod);
  const [formData, setFormData] = useState(
    period
      ? {
          name: period.name,
          startDate: period.startDate,
        }
      : {
          name: '',
          startDate: '',
        }
  );
  const closeFormFunc = () => {
    dispatch(setShowPeriodForm(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!period) {
      dispatch(createNewPeriod({ name: formData.name, startDate: formData.startDate }));
    } else {
      dispatch(editPeriodName({ name: formData.name }));
      setFormData({ ...formData, name: '' });
    }
    dispatch(setShowPeriodForm(false));
    dispatch(setSelectedPeriod(null));
  };

  const handleCancel = () => {
    dispatch(setShowPeriodForm(false));
    dispatch(setSelectedPeriod(null));
  };

  return (
    <FocusTrap>
      <form className="period-form" onSubmit={handleSubmit} onBlur={() => {}}>
        <CloseModalBtn closeFunc={closeFormFunc}></CloseModalBtn>
        <div className="form-line">
          <label>Spell name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          ></input>
        </div>
        {!period ? (
          <>
            {' '}
            <div className="form-line">
              <label>Spell start date</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              ></input>
            </div>
            <hr></hr>
          </>
        ) : (
          <></>
        )}
        <button type="submit" className="save-btn">
          Save
        </button>
        <button type="button" onClick={handleCancel} className="cancel-btn">
          Cancel
        </button>
      </form>
    </FocusTrap>
  );
}
