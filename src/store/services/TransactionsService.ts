import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITransaction } from "../../models/ITransaction";

export const transactionsAPI = createApi({
  reducerPath: "transactionsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_LOCAL_DB_URL }),
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
