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
  taskToEdit: null as Task | null,
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
    setTaskToEdit: (state, action: PayloadAction<Task | null>) => {
      state.taskToEdit = action.payload;
    },
    addTaskToState: (state, action: PayloadAction<Task>) => {
      state.tasks = [action.payload, ...state.tasks];
    },
    updateTaskInState: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...action.payload } : task
      );
    }
  }
},
);

export const {
  setTasks,
  setTaskToRemove,
  setTaskToEdit,
  addTaskToState,
  updateTaskInState,
} = tasksSlice.actions;

export default tasksSlice.reducer;
