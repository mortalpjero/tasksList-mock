import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../types/Task";

const initialState = {
  tasks: [] as Task[],
  taskToRemove: null as Task | null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    setTaskToRemove: (state, action: PayloadAction<Task | null>) => {
      state.taskToRemove = action.payload;
    },
    addTaskToState: (state, action: PayloadAction<Task>) => {
      state.tasks = [action.payload, ...state.tasks];
    },
    updateTaskInState: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...action.payload } : task
      );
    },
    removeTaskFromState: (state, action: PayloadAction<{ id: number }>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    }
  }
},
);

export const {
  setTasks,
  setTaskToRemove,
  addTaskToState,
  updateTaskInState,
  removeTaskFromState,
} = tasksSlice.actions;

export default tasksSlice.reducer;
