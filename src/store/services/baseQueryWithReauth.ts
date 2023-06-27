import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { RootState } from "../store";
import { authAPI } from "./AuthService";
import { authSlice } from "../reducers/AuthSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BASE_URL}`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).authReducer;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 403) {
    // try to get a new token
    const refreshResult = await baseQuery(
      {
        url: "/api/v1/auth/refresh",
        method: "POST",
      },
      api,
      extraOptions
    );
    if (refreshResult.data) {
      // store the new token
      const { token } = refreshResult.data as { token: string };
      api.dispatch(authSlice.actions.setAuth({ token }));
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      await api.dispatch(authAPI.endpoints.logout.initiate());
    }
  }
  return result;
};
