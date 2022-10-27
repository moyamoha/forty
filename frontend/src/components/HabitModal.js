import { BsTrash } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import FocusTrap from 'focus-trap-react';

import CloseModalBtn from './CloseModalBtn';
import NewHabitForm from './NewHabitForm';
import { setShowHabitModal } from '../state/slices/ui.slice';
import { setSelectedPeriod } from '../state/slices/data.slice';
import { deleteHabit } from '../state/api/habits.api';

import '../styles/habit-modal.css';

export default function HabitModal() {
  const period = useSelector((s) => s.data.selectedPeriod);
  const dispatch = useDispatch();
  const handleDeleteHabit = (habitId) => {
    dispatch(deleteHabit(habitId));
  };

  const closeModalFunction = () => {
    dispatch(setShowHabitModal(false));
    dispatch(setSelectedPeriod(null));
  };
  return (
    <FocusTrap>
      <div className="habit-modal">
        <p>All your activities for "{period.name}": </p>
        <CloseModalBtn closeFunc={closeModalFunction}></CloseModalBtn>
        {period.habits.length > 0 ? (
          period.habits.map((h) => (
            <div key={h.id} className="habit-row">
              <span>{h.title}</span>
              <BsTrash size={12} onClick={() => handleDeleteHabit(h.id)} className="icon"></BsTrash>
            </div>
          ))
        ) : (
          <span>No activities right now</span>
        )}
        <NewHabitForm></NewHabitForm>
      </div>
    </FocusTrap>
  );
}
