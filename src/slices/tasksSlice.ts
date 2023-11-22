import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: null,
  taskToRemove: null,
  taskToRename: null,
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setTaskToRemove: (state, action) => {
      state.taskToRemove = action.payload;
    },
    setTaskToRename: (state, action) => {
      state.taskToRename = action.payload;
    },
  },
});

export const {
  addTasks,
  setTaskToRemove,
  setTaskToRename
} = tasksSlice.actions;

export default tasksSlice.reducer;
