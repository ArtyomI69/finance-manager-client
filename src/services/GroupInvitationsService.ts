import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const groupInvitationsAPI = createApi({
  reducerPath: "groupInvitationsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (build) => ({
    fetchAllInvitations: build.query<object, void>({
      query: () => ({
        url: "/posts",
      }),
    }),
  }),
});
