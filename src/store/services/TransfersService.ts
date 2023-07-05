import { baseAPI } from "./baseAPI";
import { IUpdateTransfers } from "../../models/IUpdateTransfers";
export const TransfersApi = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    fetchTransfers: build.query<IUpdateTransfers[], void>({
      query: () => ({
        url: "/personTransactions/person/last?limit=10",
      }),
      providesTags: () => ["transfers", "user"],
    }),
    updateTransfers: build.mutation<void, IUpdateTransfers>({
      query: (body) => ({
        url: "/personTransactions/add",
        method: "POST",
        body,
      }),
      invalidatesTags: () => ["transfers", "user"],
    }),
  }),
});
