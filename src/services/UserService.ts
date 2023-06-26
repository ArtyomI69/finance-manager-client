import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProfile } from "../models/IProfile";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (build) => ({
    fetchMe: build.query<IProfile, void>({
      query: () => ({
        url: "/posts",
      }),
    }),
  }),
});
