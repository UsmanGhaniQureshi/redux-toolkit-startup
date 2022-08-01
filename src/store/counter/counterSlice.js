import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementBy5: (state) => {
      state.value += 5;
    },

    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset, incrementBy5 } =
  counterSlice.actions;
export default counterSlice.reducer;
