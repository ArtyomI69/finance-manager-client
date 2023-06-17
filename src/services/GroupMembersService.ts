import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const groupMembersAPI = createApi({
  reducerPath: "groupMembersAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (build) => ({
    fetchAllGroupMembers: build.query<object, void>({
      query: () => ({
        url: "/posts",
      }),
    }),
  }),
});
