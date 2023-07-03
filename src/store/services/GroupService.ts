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
    giveLeader: build.mutation<void, { id: number }>({
      query: (body) => ({
        url: "/people/giveLeader",
        method: "POST",
        body,
      }),
      invalidatesTags: (_, error) => (!error ? ["members", "user"] : []),
    }),
    kickMember: build.mutation<void, { id: number }>({
      query: (body) => ({
        url: "/people/kick",
        method: "POST",
        body,
      }),
      invalidatesTags: (_, error) => (!error ? ["members"] : []),
    }),
    leaveGroup: build.mutation<void, void>({
      query: (body) => ({
        url: "/people/leave",
        method: "POST",
        body,
      }),
      invalidatesTags: (_, error) =>
        !error ? ["groupName", "members", "user", "transaction"] : [],
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
