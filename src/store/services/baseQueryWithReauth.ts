import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { RootState } from "../store";
import { authSlice } from "../reducers/AuthSlice";
import { IAuthResponse } from "../types/IAuthResponse";

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

// Если отправить запрос на сервер /refresh или /logout отправить headers.authorization, приходит ошибка 403
const baseQueryRefreshNoHeaders = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BASE_URL}`,
  credentials: "include",
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  const authUrls = [
    "/api/v1/auth/refresh",
    "/api/v1/auth/authenticate",
    "/api/v1/auth/register",
    "/api/v1/auth/logout",
  ];
  const isAuthRequest = authUrls.includes(typeof args === "string" ? args : args.url);
  if (isAuthRequest) return result;

  if (result.error && result.error.status === 403) {
    // try to get a new token
    const refreshResult = (await baseQueryRefreshNoHeaders(
      { url: "/api/v1/auth/refresh", method: "POST" },
      api,
      extraOptions
    )) as { data: IAuthResponse };

    if (refreshResult.data) {
      // store the new token
      api.dispatch(authSlice.actions.setAuth(refreshResult.data));
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      // await api.dispatch(authAPI.endpoints.logout.initiate());
      await baseQueryRefreshNoHeaders(
        { url: "/api/v1/auth/logout", method: "POST" },
        api,
        extraOptions
      );
      api.dispatch(authSlice.actions.logout());
    }
  }
  return result;
};
