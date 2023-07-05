import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "./baseQueryWithReauth";

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseAPI = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["user", "transaction", "members", "groupName", "invitations", "transfers"],
  endpoints: () => ({}),
});
