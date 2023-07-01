import { baseAPI } from "./baseAPI";
import { IPerson } from "../../models/IPerson";

export const groupAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    fetchAllGroupMembers: build.query<IPerson[], void>({
      query: () => ({
        url: "/people/team",
      }),
      providesTags: () => ["members"],
    }),
    fetchGroupName: build.query<{ name: string }, void>({
      query: () => ({
        url: "/teams/my",
      }),
      providesTags: () => ["groupName"],
    }),
    updateGroupName: build.mutation<void, { name: string }>({
      query: (body) => ({
        url: "/teams/update",
        method: "POST",
        body,
      }),
      invalidatesTags: (_, error) => (!error ? ["groupName"] : []),
    }),
  }),
});
