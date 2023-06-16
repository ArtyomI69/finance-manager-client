import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProfile } from "../models/IProfile";

export const profileAPI = createApi({
  reducerPath: "profileAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (build) => ({
    fetchProfile: build.query<IProfile, void>({
      query: () => ({
        url: "/posts",
      }),
    }),
  }),
});
