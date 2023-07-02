import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TransactionsVisualization } from "../../models/TransactionsVisualization";

interface DashboardState {
  timestamp: number;
  transactionsVisualization: TransactionsVisualization;
  allTime: boolean;
}

const initialState: DashboardState = {
  timestamp: Date.now(),
  transactionsVisualization: "histogram--person",
  allTime: false,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    changeChartType(
      state,
      action: PayloadAction<{ transactionsVisualization: TransactionsVisualization }>
    ) {
      state.transactionsVisualization = action.payload.transactionsVisualization;
    },
    changeDate(state, action: PayloadAction<{ timestamp: number }>) {
      state.timestamp = action.payload.timestamp;
    },
    changeAlltime(state, action: PayloadAction<{ allTime: boolean }>) {
      state.allTime = action.payload.allTime;
    },
  },
});

export default dashboardSlice.reducer;
