import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Modal = {
  type: 'removeTask' | 'discardChanges' | 'none',
};

const initialState: Modal = {
  type: 'none'
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<Modal>) => {
      state.type = action.payload.type;
    }
  }
})

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;
