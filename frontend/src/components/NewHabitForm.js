import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { BsCheck2Circle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addHabit } from '../state/api/habits.api';

export default function NewHabitForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length > 0) {
      dispatch(addHabit(title));
    }
    setTitle('');
  };
  const getBtnColor = () => {
    return title.length > 0 ? 'green' : 'grey';
  };
  return (
    <IconContext.Provider value={{ color: getBtnColor() }}>
      <form onSubmit={handleSubmit} className="add-habit-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New activity"
        ></input>
        <button>
          <BsCheck2Circle size={30} className="icon" type="button"></BsCheck2Circle>
        </button>
      </form>
    </IconContext.Provider>
  );
}
