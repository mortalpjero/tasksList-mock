import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice.ts";

const store = configureStore({
  reducer: {
    tasksInfo: tasksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
