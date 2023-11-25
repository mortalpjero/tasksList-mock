import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

const initialState = {
  taskToEdit: null as Task | null,
  title: null as string | null,
  description: null as string | null,
};

const editTaskSlice = createSlice({
  name: 'editTask',
  initialState,
  reducers: {
    setNewTitle: (state, action: PayloadAction<string | null>) => {
      state.title = action.payload;
    },
    setNewDescription: (state, action: PayloadAction<string | null>) => {
      state.description = action.payload;
    },
    setTaskToEdit: (state, action: PayloadAction<Task | null>) => {
      state.taskToEdit = action.payload;
    },
  }
});

export const {
  setNewTitle,
  setNewDescription,
  setTaskToEdit
} = editTaskSlice.actions;

export default editTaskSlice.reducer;
