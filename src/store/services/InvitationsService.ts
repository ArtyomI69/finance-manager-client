import { baseAPI } from "./baseAPI";

export const invitationsAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    fetchAllInvitations: build.query<object, void>({
      query: () => ({
        url: "/posts",
      }),
    }),
  }),
});
