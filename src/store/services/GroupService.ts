import { baseAPI } from "./baseAPI";
import { IPerson } from "../../models/IPerson";
import { IInvitation } from "../../models/IInvitations";

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
    fetchAllInvitations: build.query<IInvitation[], void>({
      query: () => ({
        url: "/invitations/toMe",
      }),
      providesTags: () => ["invitations"],
    }),
    addInvitation: build.mutation<void, { personTo: { id: number } }>({
      query: (body) => ({
        url: "/invitations/add",
        method: "POST",
        body,
      }),
      invalidatesTags: (_, error) => (!error ? ["groupName"] : []),
    }),
  }),
});
