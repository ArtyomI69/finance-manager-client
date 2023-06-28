import { createApi } from "@reduxjs/toolkit/query/react";
import { ITransaction } from "../../models/ITransaction";

import { baseQueryWithReauth } from "./baseQueryWithReauth";

export const transactionsAPI = createApi({
  reducerPath: "transactionsAPI",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    fetchTransactionsMonth: build.query<ITransaction[], void>({
      query: () => ({
        url: "/categoryTransactions/person",
      }),
    }),
  }),
});
