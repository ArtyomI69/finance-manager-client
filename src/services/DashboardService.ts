import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITransaction } from "../models/ITransaction";

export const dashboardAPI = createApi({
  reducerPath: "dashboardAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (build) => ({
    fetchTransactionsMonth: build.query<ITransaction[], number>({
      query: (timestamp = Date.now()) => ({
        url: "/transactions",
        params: {
          _timestamp: timestamp,
        },
      }),
    }),
  }),
});
