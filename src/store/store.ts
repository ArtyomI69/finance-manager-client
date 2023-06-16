import { combineReducers, configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "./reducers/DashboardSlice";
import { dashboardApi } from "../services/DashboardService";

const rootReducer = combineReducers({
  dashboardReducer,
  [dashboardApi.reducerPath]: dashboardApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dashboardApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
