/* eslint-disable no-empty */
import { baseAPI } from "./baseAPI";
import { ILogin } from "../../models/ILogin";
import { IProfile } from "../../models/IProfile";
import { IAuthResponse } from "../types/IAuthResponse";
import { IForgotPassword } from "../../models/IForgotPassword";
import { authSlice } from "../reducers/AuthSlice";

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<IAuthResponse, IProfile>({
      query: ({ full_name, email, gender, password }) => ({
        url: "/api/v1/auth/register",
        method: "POST",
        body: {
          name: full_name,
          email,
          gender,
          password,
        },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.error) return;

          dispatch(authSlice.actions.setAuth(data));
          dispatch(baseAPI.util.resetApiState());
        } catch (error) {}
      },
    }),
    login: build.mutation<IAuthResponse, ILogin>({
      query: (body) => ({
        url: "/api/v1/auth/authenticate",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.error) return;

          dispatch(authSlice.actions.setAuth(data));
          dispatch(baseAPI.util.resetApiState());
        } catch (error) {}
      },
    }),
    refreshTokens: build.mutation<IAuthResponse, void>({
      query: () => ({
        url: "/api/v1/auth/refresh",
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.error) return;

          dispatch(authSlice.actions.setAuth(data));
        } catch (error) {}
      },
    }),
    logout: build.mutation<IAuthResponse, void>({
      query: () => ({
        url: "/api/v1/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(authSlice.actions.logout());
        } catch (error) {}
      },
    }),
    forgotPassword: build.mutation<IAuthResponse, IForgotPassword>({
      query: (body) => ({
        url: "/api/v1/auth/forgotPassword",
        method: "POST",
        body,
      }),
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(authSlice.actions.setEmail(body));
        } catch (error) {}
      },
    }),
    resetPassword: build.mutation<IAuthResponse, { token: string; password: string }>({
      query: (body) => ({
        url: "/api/v1/auth/forgotPasswordConfirm",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.error) return;

          dispatch(authSlice.actions.setAuth(data));
        } catch (error) {}
      },
    }),
  }),
});
