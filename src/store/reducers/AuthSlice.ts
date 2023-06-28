import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IAuthResponse } from "../types/IAuthResponse";

interface AuthState {
  isAuth: boolean;
  token: string;
}

const initialState: AuthState = {
  isAuth: false,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false;
      state.token = "";
    },
    setAuth(state, action: PayloadAction<IAuthResponse>) {
      state.isAuth = true;
      state.token = action.payload.token;
    },
  },
});

export default authSlice.reducer;
