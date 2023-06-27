import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "./baseQueryWithReauth";
import { IPerson } from "../../models/IPerson";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    fetchMe: build.query<IPerson, void>({
      query: () => ({
        url: "/me",
      }),
    }),
  }),
});
