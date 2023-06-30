import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "./baseQueryWithReauth";
import { IPerson } from "../../models/IPerson";
import { IProfile } from "../../models/IProfile";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["user"],
  endpoints: (build) => ({
    fetchMe: build.query<IPerson, void>({
      query: () => ({
        url: "/me",
      }),
      providesTags: ["user"],
    }),
    updateMe: build.mutation<void, Omit<IProfile, "confirmPassword">>({
      query: (body) => ({
        url: "/people/update",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
