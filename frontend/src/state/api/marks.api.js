import axios from 'axios';
import { setData, setSelectedPeriod } from '../slices/data.slice';

export function changeMarkStatus(markId, status) {
  return async (dispatch, getState) => {
    try {
      const periodId = getState().data.selectedPeriod.id;
      const res = await axios.patch(`marks/change-status/${periodId}/${markId}`, { status });
      dispatch(setData(res.data));
      const period = res.data.find((p) => p.id === periodId);
      dispatch(setSelectedPeriod(period));
    } catch (e) {}
  };
}
