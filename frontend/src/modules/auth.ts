import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import firebase from 'firebase/app';


type Auth = { displayName: string | null, email: string | null } | null;

const authSlice = createSlice({
  name: 'auth',
  initialState: null as Auth,
  reducers: {
    login: {
      reducer: (state, action: PayloadAction<Auth>) => {
        return action.payload;
      },
      prepare: (user: firebase.User | null) => {
        return { payload: user === null ? null : { displayName: user.displayName, email: user.email } };
      }
    }
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;

