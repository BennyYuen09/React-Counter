import { createSlice } from '@reduxjs/toolkit'

export const sizeSlice = createSlice({
    name: 'size',
    initialState: {
        value: 0,
    },
    reducers: {
        setSizeByAmount: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setSizeByAmount } = sizeSlice.actions;

export const selectSize = state => state.size.value;

export default sizeSlice.reducer;