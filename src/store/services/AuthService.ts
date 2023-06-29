/* eslint-disable no-empty */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ILogin } from "../../models/ILogin";
import { IProfile } from "../../models/IProfile";
import { IAuthResponse } from "../types/IAuthResponse";
import { authSlice } from "../reducers/AuthSlice";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1/auth`,
    credentials: "include",
  }),
  endpoints: (build) => ({
    register: build.mutation<IAuthResponse, IProfile>({
      query: ({ full_name, email, gender, password }) => ({
        url: "/register",
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
        } catch (error) {}
      },
    }),
    login: build.mutation<IAuthResponse, ILogin>({
      query: (body) => ({
        url: "/authenticate",
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
    refreshTokens: build.mutation<IAuthResponse, void>({
      query: () => ({
        url: "/refresh",
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
        url: "/logout",
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(authSlice.actions.logout());
        } catch (error) {}
      },
    }),
  }),
});
