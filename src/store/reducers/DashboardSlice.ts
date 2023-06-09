import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ChartType } from "../../models/ChartType";

interface DashboardState {
  timestamp: number;
  chartType: ChartType;
}

const initialState: DashboardState = {
  timestamp: Date.now(),
  chartType: "histogram",
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    changeChartType(state, action: PayloadAction<{ chartType: ChartType }>) {
      state.chartType = action.payload.chartType;
    },
    changeDate(state, action: PayloadAction<{ timestamp: number }>) {
      state.timestamp = action.payload.timestamp;
    },
  },
});

export default dashboardSlice.reducer;
