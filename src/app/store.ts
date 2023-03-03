import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import CheckListReducer  from '../redux/checkList';
import noteReducer from '../redux/noteSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Note: noteReducer,
    CheckList : CheckListReducer
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
