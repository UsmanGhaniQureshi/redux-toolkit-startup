import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import postSlice from "./post/postSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts :postSlice
  },
});
