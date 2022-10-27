import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { deletePeriod } from '../state/api/perios.api';
import { setShowHabitModal, setShowPeriodForm } from '../state/slices/ui.slice';
import { setSelectedPeriod } from '../state/slices/data.slice';

export default function PeriodOptions({ period }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePeriod(period.id));
  };

  const handleEditName = () => {
    dispatch(setSelectedPeriod(period));
    dispatch(setShowPeriodForm(true));
  };

  const handleClickPlus = () => {
    dispatch(setSelectedPeriod(period));
    dispatch(setShowHabitModal(true));
  };

  return (
    <div className="period-options">
      <AiOutlinePlus size={16} onClick={handleClickPlus}></AiOutlinePlus>
      <AiOutlineEdit size={16} onClick={handleEditName}></AiOutlineEdit>
      <BsTrash size={16} onClick={handleDelete}></BsTrash>
    </div>
  );
}
