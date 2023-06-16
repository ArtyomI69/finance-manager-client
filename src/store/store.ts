import { combineReducers, configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "./reducers/DashboardSlice";
import { dashboardAPI } from "../services/DashboardService";
import { profileAPI } from "../services/ProfileService";

const rootReducer = combineReducers({
  dashboardReducer,
  [dashboardAPI.reducerPath]: dashboardAPI.reducer,
  [profileAPI.reducerPath]: profileAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dashboardAPI.middleware, profileAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
