import { baseAPI } from "./baseAPI";
import { ITransaction } from "../../models/ITransaction";
import { TransactionsVisualization } from "../../models/TransactionsVisualization";
import { IGroupedTransaction } from "../../models/IGroupedTransaction";

interface FetchTransactionsUrlInput {
  transactionsVisualization: TransactionsVisualization;
  allTime: boolean;
}

const getFetchTransactionsUrl = ({
  transactionsVisualization,
  allTime,
}: FetchTransactionsUrlInput) => {
  let url = "";
  switch (transactionsVisualization) {
    case "table--person":
    case "histogram--person": {
      if (allTime) url = "/categoryTransactions/person";
      else url = "/categoryTransactions/person/month";
      break;
    }
    case "table--group":
    case "histogram--group": {
      if (allTime) url = "/categoryTransactions/team";
      url = "/categoryTransactions/team/month";
      break;
    }
    case "piechart--person--income": {
      if (allTime) url = "/categoryTransactions/person/income";
      url = "/categoryTransactions/person/income/month";
      break;
    }
    case "piechart--person--expenses": {
      if (allTime) url = "/categoryTransactions/person/expenses";
      url = "/categoryTransactions/person/expenses/month";
      break;
    }
    case "piechart--group--income": {
      if (allTime) url = "/categoryTransactions/team/income";
      url = "/categoryTransactions/team/income/month";
      break;
    }
    case "piechart--group--expenses": {
      if (allTime) url = "/categoryTransactions/team/expenses";
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
  allTime: boolean;
}

export const transactionsAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    fetchTransactionsMonth: build.query<
      ITransaction[] | IGroupedTransaction[],
      FetchTransactionsInput
    >({
      query: ({ transactionsVisualization, timestamp, allTime }) => ({
        url: getFetchTransactionsUrl({ transactionsVisualization, allTime }),
        params: {
          timestamp,
        },
      }),
      providesTags: () => ["transaction"],
    }),
  }),
});
