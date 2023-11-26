import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../types/Task";

const initialState = {
  taskToEdit: null as Task | null,
  title: null as string | null,
  body: null as string | null,
};

const editTaskSlice = createSlice({
  name: 'editTask',
  initialState,
  reducers: {
    setNewTitle: (state, action: PayloadAction<string | null>) => {
      state.title = action.payload;
    },
    setNewBody: (state, action: PayloadAction<string | null>) => {
      state.body = action.payload;
    },
    setTaskToEdit: (state, action: PayloadAction<Task | null>) => {
      state.taskToEdit = action.payload;
    },
  }
});

export const {
  setNewTitle,
  setNewBody,
  setTaskToEdit
} = editTaskSlice.actions;

export default editTaskSlice.reducer;
