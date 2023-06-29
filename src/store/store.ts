import { combineReducers, configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "./reducers/DashboardSlice";
import authReducer from "./reducers/AuthSlice";
import { transactionsAPI } from "./services/TransactionsService";
import { authAPI } from "./services/AuthService";
import { userAPI } from "./services/UserService";
import { groupAPI } from "./services/GroupService";
import { invitationsAPI } from "./services/InvitationsService";

const rootReducer = combineReducers({
  dashboardReducer,
  authReducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [transactionsAPI.reducerPath]: transactionsAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [groupAPI.reducerPath]: groupAPI.reducer,
  [invitationsAPI.reducerPath]: invitationsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        authAPI.middleware,
        transactionsAPI.middleware,
        userAPI.middleware,
        groupAPI.middleware,
        invitationsAPI.middleware
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
