import { createSlice } from "@reduxjs/toolkit";
import { getNotes } from "./services";

export interface NoteState {
  notes: any;
  refresh: any;
  value:any
}

const initialState: NoteState = {
  notes: [],
  refresh: false,
  value: ""
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    notesData: (state:any, action:any) => {
      state.notes = action.payload
    },
    refresh: (state: any) => {
      state.refresh = !state.refresh;
    },
    searchedNotes: (state:any, action:any) => { 
      state.notes = action.payload
    },
    searchedValue: (state:any, action:any) => {
      state.value = action.payload
    }
  },
});

export const { refresh, notesData, searchedNotes, searchedValue } = noteSlice.actions;

export default noteSlice.reducer;
