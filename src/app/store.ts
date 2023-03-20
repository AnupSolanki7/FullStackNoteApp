import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import ChatReducer from "../redux/chat"
import CheckListReducer  from '../redux/checkList';
import noteReducer from '../redux/noteSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Note: noteReducer,
    CheckList : CheckListReducer,
    Chat: ChatReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
