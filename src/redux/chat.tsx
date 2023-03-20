import { createSlice } from "@reduxjs/toolkit";

export interface ChatState {
    user:any,
    room:any
}

const initialState: ChatState = {
  user:"",
  room:""
};

export const CheckList = createSlice({
  name: "Chat",
  initialState,
  reducers: {
    setData: (state: any, action:any) => {
      const UserRoom = JSON.stringify(action.payload)
      localStorage.setItem("ChatUser", UserRoom)
        
      state.user = action.payload.user;
      state.room = action.payload.room;
    },
  },
});

export const { setData } = CheckList.actions;

export default CheckList.reducer;