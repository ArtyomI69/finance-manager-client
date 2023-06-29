import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "./baseQueryWithReauth";

export const groupAPI = createApi({
  reducerPath: "groupAPI",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    fetchAllGroupMembers: build.query<object, void>({
      query: () => ({
        url: "/me",
      }),
    }),
  }),
});
