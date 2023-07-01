import { baseAPI } from "./baseAPI";
import { IPerson } from "../../models/IPerson";
import { IProfile } from "../../models/IProfile";

export const userAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    fetchMe: build.query<IPerson, void>({
      query: () => ({
        url: "/people/me",
      }),
      providesTags: () => ["user"],
    }),
    updateMe: build.mutation<void, Omit<IProfile, "confirmPassword">>({
      query: (body) => ({
        url: "/people/update",
        method: "POST",
        body,
      }),
      invalidatesTags: (_, error) => (!error ? ["user"] : []),
    }),
  }),
});
