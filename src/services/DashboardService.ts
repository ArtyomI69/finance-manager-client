import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITransaction } from "../models/ITransaction";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (build) => ({
    fetchTransactionsMonth: build.query<ITransaction[], number>({
      query: (timestamp = Date.now()) => ({
        url: "/posts",
        params: {
          _timestamp: timestamp,
        },
      }),
    }),
  }),
});
