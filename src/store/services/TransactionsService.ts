import { createApi } from "@reduxjs/toolkit/query/react";
import { ITransaction } from "../../models/ITransaction";

import { baseQueryWithReauth } from "./baseQueryWithReauth";
import { TransactionsVisualization } from "../../models/TransactionsVisualization";
import { IGroupedTransaction } from "../../models/IGroupedTransaction";

const getFetchTransactionsUrl = (transactionsVisualization: TransactionsVisualization) => {
  let url = "";
  switch (transactionsVisualization) {
    case "table--person":
    case "histogram--person": {
      url = "/categoryTransactions/person/month";
      break;
    }
    case "table--group":
    case "histogram--group": {
      url = "/categoryTransactions/team/month";
      break;
    }
    case "piechart--person--income": {
      url = "/categoryTransactions/person/income/month";
      break;
    }
    case "piechart--person--expenses": {
      url = "/categoryTransactions/person/expenses/month";
      break;
    }
    case "piechart--group--income": {
      url = "/categoryTransactions/team/income/month";
      break;
    }
    case "piechart--group--expenses": {
      url = "/categoryTransactions/team/expenses/month";
      break;
    }
    default:
      url = "/categoryTransactions/person";
  }
  return url;
};

interface FetchTransactionsInput {
  transactionsVisualization: TransactionsVisualization;
  timestamp: number;
}

export const transactionsAPI = createApi({
  reducerPath: "transactionsAPI",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["transaction"],
  endpoints: (build) => ({
    fetchTransactionsMonth: build.query<
      ITransaction[] | IGroupedTransaction[],
      FetchTransactionsInput
    >({
      query: ({ transactionsVisualization, timestamp }) => ({
        url: getFetchTransactionsUrl(transactionsVisualization),
        params: {
          timestamp,
        },
      }),
      providesTags: ["transaction"],
    }),
  }),
});
