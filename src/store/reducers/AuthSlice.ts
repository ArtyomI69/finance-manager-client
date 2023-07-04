import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IAuthResponse } from "../types/IAuthResponse";

interface AuthState {
  isAuth: boolean;
  token: string;
  email: string;
}

const initialState: AuthState = {
  isAuth: false,
  token: "",
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false;
      state.token = "";
      state.email = "";
    },
    setAuth(state, action: PayloadAction<IAuthResponse>) {
      state.isAuth = action.payload.person.confirmed === "T";
      state.token = action.payload.token;
      state.email = action.payload.person.email;
    },
    setEmail(state, action: PayloadAction<{ email: string }>) {
      state.email = action.payload.email;
    },
  },
});

export default authSlice.reducer;
