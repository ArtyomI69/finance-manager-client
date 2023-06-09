import { FC } from "react";

import styles from "./Chart.module.css";
import { useAppSelector } from "../../../hooks/redux";
import BarChart from "../BarChart/BarChart";
import PieChart from "../PieChart/PieChart";

const Chart: FC = () => {
  const { chartType } = useAppSelector((state) => state.dashboardReducer);

  return (
    <div className={styles.chart}>
      {chartType === "histogram" && <BarChart />}
      {chartType === "piechart" && <PieChart />}
    </div>
  );
};

export default Chart;
