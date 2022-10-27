import axios from 'axios';
import { setData, setSelectedPeriod } from '../slices/data.slice';

export function addHabit(title) {
  return async (dispatch, getState) => {
    try {
      const period = getState().data.selectedPeriod;
      const res = await axios.post(`/habits/${period.id}`, { title });
      dispatch(setData(res.data));
      const modified = res.data.find((p) => p.id === period.id);
      dispatch(setSelectedPeriod(modified));
    } catch (e) {}
  };
}

export function deleteHabit(habitId) {
  return async (dispatch, getState) => {
    try {
      const period = getState().data.selectedPeriod;
      const res = await axios.delete(`/habits/${period.id}/${habitId}`);
      dispatch(setData(res.data));
      const modified = res.data.find((p) => p.id === period.id);
      dispatch(setSelectedPeriod(modified));
    } catch (e) {}
  };
}
