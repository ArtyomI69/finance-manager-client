import { combineReducers, configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "./reducers/DashboardSlice";
import { transactionsAPI } from "../services/TransactionsService";
import { profileAPI } from "../services/ProfileService";
import { groupMembersAPI } from "../services/GroupMembersService";
import { groupInvitationsAPI } from "../services/GroupInvitationsService";

const rootReducer = combineReducers({
  dashboardReducer,
  [transactionsAPI.reducerPath]: transactionsAPI.reducer,
  [profileAPI.reducerPath]: profileAPI.reducer,
  [groupMembersAPI.reducerPath]: groupMembersAPI.reducer,
  [groupInvitationsAPI.reducerPath]: groupInvitationsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        transactionsAPI.middleware,
        profileAPI.middleware,
        groupMembersAPI.middleware,
        groupInvitationsAPI.middleware
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
