import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type Auth = { displayName: string | null, email: string | null } | null;

const authSlice = createSlice({
  name: 'auth',
  initialState: null as Auth,
  reducers: {
    login: (state, action: PayloadAction<Auth>) => {
      return action.payload;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;

