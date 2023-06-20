import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TransactionsVisualizationType } from "../../models/TransactionsVisualizationType";

interface DashboardState {
  timestamp: number;
  transactionsDataType: TransactionsVisualizationType;
}

const initialState: DashboardState = {
  timestamp: Date.now(),
  transactionsDataType: "histogram",
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    changeChartType(state, action: PayloadAction<{ chartType: TransactionsVisualizationType }>) {
      state.transactionsDataType = action.payload.chartType;
    },
    changeDate(state, action: PayloadAction<{ timestamp: number }>) {
      state.timestamp = action.payload.timestamp;
    },
  },
});

export default dashboardSlice.reducer;
