import { baseAPI } from "./baseAPI";
import { IInvitation } from "../../models/IInvitations";

export const invitationsAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
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
