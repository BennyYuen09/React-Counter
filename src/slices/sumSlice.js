import { createSlice } from '@reduxjs/toolkit'

export const sumSlice = createSlice({
    name: 'sum',
    initialState: {
      value: 0,
    },
    reducers: {
      increment: state => {
        state.value += 1;
      },
      decrement: state => {
        state.value -= 1;
      },
      setByAmount: (state, action) => {
        state.value = action.payload;
      },
    },
  });

export const { increment, decrement, setByAmount } = sumSlice.actions;

export const selectSum = state => state.sum.value;

export default sumSlice.reducer;