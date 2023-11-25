import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice.ts";
import modalSlice from "./modalSlice.ts";
import editTaskSlice from "./editTaskSlice.ts";

const store = configureStore({
  reducer: {
    tasksInfo: tasksSlice,
    modalsInfo: modalSlice,
    editTaskInfo: editTaskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
