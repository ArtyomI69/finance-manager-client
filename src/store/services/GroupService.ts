import { baseAPI } from "./baseAPI";

export const groupAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    fetchAllGroupMembers: build.query<object, void>({
      query: () => ({
        url: "/me",
      }),
    }),
  }),
});
