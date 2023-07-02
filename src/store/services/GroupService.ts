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
        url: "/teams/leave",
        method: "POST",
        body,
      }),
      invalidatesTags: (_, error) => (!error ? ["groupName", "members", "user"] : []),
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
    acceptInvitation: build.mutation<void, { id: number }>({
      query: (body) => ({
        url: `/invitations/accept`,
        method: "POST",
        body,
      }),
      invalidatesTags: (_, error) =>
        !error ? ["groupName", "invitations", "members", "transaction", "user"] : [],
    }),
    declineInvitation: build.mutation<void, { id: number }>({
      query: (body) => ({
        url: `/invitations/delete`,
        method: "POST",
        body,
      }),
      invalidatesTags: (_, error) => (!error ? ["invitations"] : []),
    }),
  }),
});
