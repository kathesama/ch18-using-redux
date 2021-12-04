import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    increase(state, action) {
      state.value += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, decrement, increase, toggleCounter } = counterSlice.actions;

export default counterSlice.reducer;
