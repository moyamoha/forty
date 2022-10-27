import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeMarkStatus } from '../state/api/marks.api';
import { getStatusEmoji } from '../utils';

export default function EditableMark({ mark }) {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(mark.status);
  const handleSelectMarkChange = () => {
    let s = -10;
    switch (status) {
      case 0:
        setStatus(1);
        s = 1;
        break;
      case 1:
        setStatus(-1);
        s = -1;
        break;
      case -1:
      default:
        setStatus(0);
        s = 0;
        break;
    }
    dispatch(changeMarkStatus(mark.id, s));
  };
  return (
    <span style={{ cursor: 'pointer' }} onClick={handleSelectMarkChange}>
      {getStatusEmoji(status)}
    </span>
  );
}
