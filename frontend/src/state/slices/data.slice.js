import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: [],
  error: '',
  selectedPeriod: null,
};

const slice = createSlice({
  name: 'mainSlice',
  initialState: initialState,
  reducers: {
    setData(state, action) {
      state.content = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addPeriod(state, action) {
      state.content.push(action.payload);
    },
    removePeriod(state, action) {
      state.content.splice(
        state.content.findIndex((p) => p.id === action.payload),
        1
      );
    },
    setSelectedPeriod(state, action) {
      state.selectedPeriod = action.payload;
    },
  },
});

export const { setData, setError, addPeriod, setSelectedPeriod, removePeriod } = slice.actions;
export default slice.reducer;
