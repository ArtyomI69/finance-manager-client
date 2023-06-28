/* eslint-disable no-empty */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ILogin } from "../../models/ILogin";
import { IAuthResponse } from "../types/IAuthResponse";
import { authSlice } from "../reducers/AuthSlice";
import { userAPI } from "./UserService";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1/auth`,
    credentials: "include",
  }),
  endpoints: (build) => ({
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
          await dispatch(userAPI.endpoints.fetchMe.initiate());
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
          await dispatch(userAPI.endpoints.fetchMe.initiate());
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
