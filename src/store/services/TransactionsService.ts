import { baseAPI } from "./baseAPI";
import { ITransaction } from "../../models/ITransaction";
import { TransactionsVisualization } from "../../models/TransactionsVisualization";
import { IGroupedTransaction } from "../../models/IGroupedTransaction";
import { IIncomes } from "../../models/IIncomes";
import { ICategories } from "../../models/ICategories";

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
      else url = "/categoryTransactions/team/month";
      break;
    }
    case "piechart--person--income": {
      if (allTime) url = "/categoryTransactions/person/income";
      else url = "/categoryTransactions/person/income/month";
      break;
    }
    case "piechart--person--expenses": {
      if (allTime) url = "/categoryTransactions/person/expenses";
      else url = "/categoryTransactions/person/expenses/month";
      break;
    }
    case "piechart--group--income": {
      if (allTime) url = "/categoryTransactions/team/income";
      else url = "/categoryTransactions/team/income/month";
      break;
    }
    case "piechart--group--expenses": {
      if (allTime) url = "/categoryTransactions/team/expenses";
      else url = "/categoryTransactions/team/expenses/month";
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
    fetchTransactions: build.query<ITransaction[] | IGroupedTransaction[], FetchTransactionsInput>({
      query: ({ transactionsVisualization, timestamp, allTime }) => ({
        url: getFetchTransactionsUrl({ transactionsVisualization, allTime }),
        params: {
          timestamp,
        },
      }),
      providesTags: () => ["transaction"],
    }),
    fetchIncomes: build.query<IIncomes[], void>({
      query: () => ({
        url: "/categoryTransactions/person/income/last?limit=10",
      }),
      providesTags: () => ["transaction"],
    }),
    fetchExpenses: build.query<IIncomes[], void>({
      query: () => ({
        url: "/categoryTransactions/person/expenses/last?limit=10",
      }),
      providesTags: () => ["transaction"],
    }),
    AddTransactions: build.mutation<void, IIncomes>({
      query: (body) => ({
        url: "/categoryTransactions/add",
        method: "POST",
        body,
      }),
      invalidatesTags: () => ["transaction", "user"],
    }),
    DeleteTransactions: build.mutation<void, { id: number }>({
      query: (body) => ({
        url: `/categoryTransactions/delete`,
        method: "POST",
        body,
      }),
      invalidatesTags: () => ["transaction", "user"],
    }),
    fetchCategory: build.query<ICategories[], void>({
      query: () => ({
        url: "/categories",
      }),
    }),
  }),
});
