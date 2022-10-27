import { createSlice } from '@reduxjs/toolkit';
import { NAKYMA } from '../../utils';

const initialState = {
  periodView: NAKYMA.CALENDAR,
  showPeriodForm: false,
  showHabitModal: false,
};

const slice = createSlice({
  name: 'uiSlice',
  initialState: initialState,
  reducers: {
    setPeriodView(state, action) {
      state.periodView = action.payload;
    },
    setShowPeriodForm(state, action) {
      state.showPeriodForm = action.payload;
    },
    setShowHabitModal(state, action) {
      state.showHabitModal = action.payload;
    },
  },
});

export const { setPeriodView, setShowPeriodForm, setShowHabitModal } = slice.actions;
export default slice.reducer;
