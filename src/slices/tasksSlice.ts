import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

const initialState = {
  tasks: [] as Task[],
  taskToRemove: null as Task | null,
  taskToRename: null as Task | null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    setTaskToRemove: (state, action: PayloadAction<Task>) => {
      state.taskToRemove = action.payload;
    },
    setTaskToRename: (state, action: PayloadAction<Task>) => {
      state.taskToRename = action.payload;
    },
    addTaskToState: (state, action: PayloadAction<Task>) => {
      state.tasks = [action.payload, ...state.tasks];
    },
  },
});

export const {
  setTasks,
  setTaskToRemove,
  setTaskToRename,
  addTaskToState,
} = tasksSlice.actions;

export default tasksSlice.reducer;
