import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "./baseQueryWithReauth";

export const groupMembersAPI = createApi({
  reducerPath: "groupMembersAPI",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    fetchAllGroupMembers: build.query<object, void>({
      query: () => ({
        url: "/categoryTransactions/team",
      }),
    }),
  }),
});
