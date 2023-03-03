import { createSlice } from "@reduxjs/toolkit";

export interface CheckListState {
  refresh: any;
}

const initialState: CheckListState = {
  refresh: false,
};

export const CheckList = createSlice({
  name: "CheckList",
  initialState,
  reducers: {
    refresh: (state: any) => {
      state.refresh = !state.refresh;
    },

  },
});

export const { refresh } = CheckList.actions;

export default CheckList.reducer;