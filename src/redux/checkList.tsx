import { createSlice } from "@reduxjs/toolkit";

export interface CheckListState {
  refresh: any;
  checkListArray: any;
  value: any;
}

const initialState: CheckListState = {
  refresh: false,
  checkListArray: [],
  value: "",
};

export const CheckList = createSlice({
  name: "CheckList",
  initialState,
  reducers: {
    refresh: (state: any) => {
      state.refresh = !state.refresh;
    },
    checkArray: (state: any, action: any) => {
      state.checkListArray = action.payload;
    },
    checkValue: (state:any, action:any) => {
      state.value = action.payload
    }
  },
});

export const { refresh, checkArray, checkValue } = CheckList.actions;

export default CheckList.reducer;
