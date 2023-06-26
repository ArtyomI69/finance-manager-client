/* eslint-disable no-empty */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILogin } from "../models/ILogin";
import { authSlice } from "../store/reducers/AuthSlice";
import { userAPI } from "./UserService";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1/auth`,
    credentials: "include",
  }),
  endpoints: (build) => ({
    login: build.mutation<{ token: string }, ILogin>({
      query: (body) => ({
        url: "/authenticate",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(authSlice.actions.setAuth(data));
          await dispatch(userAPI.endpoints.fetchMe.initiate());
        } catch (error) {}
      },
    }),
  }),
});
