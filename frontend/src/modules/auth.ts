import { createSlice } from '@reduxjs/toolkit';
import firebase from 'firebase';

const login = (user: firebase.User | null) => (dispatch: any) => {
  const payload = user === null ? null : { displayName: user.displayName, email: user.email };
  dispatch({ type: 'auth/login', payload });
};

const authSlice = createSlice({
  name: 'auth',
  initialState: null as firebase.User | null,
  reducers: {
    login: (state, action) => {
      return action.payload;
    }
  },
});

export { login };
export default authSlice.reducer;

