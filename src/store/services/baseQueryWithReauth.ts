import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";

import { RootState } from "../store";
import { authSlice } from "../reducers/AuthSlice";
import { IAuthResponse } from "../types/IAuthResponse";

const mutex = new Mutex();
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
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  const authEndpoints = ["register", "login", "refreshTokens", "logout"];
  const isAuthRequest = authEndpoints.includes(api.endpoint);
  if (isAuthRequest) return result;

  if (result.error && result.error.status === 403) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
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
      } finally {
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};
