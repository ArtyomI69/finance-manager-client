import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TransactionsVisualization } from "../../models/TransactionsVisualization";

interface DashboardState {
  timestamp: number;
  transactionsVisualization: TransactionsVisualization;
}

const initialState: DashboardState = {
  timestamp: Date.now(),
  transactionsVisualization: "histogram--person",
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
  },
});

export default dashboardSlice.reducer;
