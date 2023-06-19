import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TransactionsDataType } from "../../models/ChartType";

interface DashboardState {
  timestamp: number;
  transactionsDataType: TransactionsDataType;
}

const initialState: DashboardState = {
  timestamp: Date.now(),
  transactionsDataType: "histogram",
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    changeChartType(state, action: PayloadAction<{ chartType: TransactionsDataType }>) {
      state.transactionsDataType = action.payload.chartType;
    },
    changeDate(state, action: PayloadAction<{ timestamp: number }>) {
      state.timestamp = action.payload.timestamp;
    },
  },
});

export default dashboardSlice.reducer;
