import axios from 'axios';
import {
  addPeriod,
  removePeriod,
  setData,
  setError,
  setSelectedPeriod,
} from '../slices/data.slice';

export function fetchData() {
  return async (dispatch, getState) => {
    try {
      const res = await axios.get('periods/');
      dispatch(setData(res.data));
    } catch (e) {
      dispatch(setError('Could not fetch data'));
    }
  };
}

export function createNewPeriod(period) {
  return async (dispatch, getState) => {
    try {
      const res = await axios.post('periods/', period);
      dispatch(addPeriod(res.data));
    } catch (e) {
      dispatch(setError('Could not create New Period'));
    }
  };
}

export function editPeriodName({ name }) {
  return async (dispatch, getState) => {
    try {
      const period = getState().data.selectedPeriod;
      const res = await axios.patch(`periods/change-name/${period.id}`, { name });
      dispatch(setData(res.data));
      const modified = res.data.map((p) => p.id === period.id);
      dispatch(setSelectedPeriod(modified));
    } catch (e) {
      dispatch(setError('Could not create New Period'));
    }
  };
}

export function deletePeriod(periodId) {
  return async (dispatch, getState) => {
    try {
      await axios.delete(`periods/${periodId}`);
      dispatch(removePeriod(periodId));
    } catch (e) {}
  };
}
