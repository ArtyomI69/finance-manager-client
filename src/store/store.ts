import { combineReducers, configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "./reducers/DashboardSlice";
import authReducer from "./reducers/AuthSlice";
import { baseAPI } from "./services/baseAPI";

const rootReducer = combineReducers({
  dashboardReducer,
  authReducer,
  [baseAPI.reducerPath]: baseAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
