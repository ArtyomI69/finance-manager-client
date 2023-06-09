import { FC } from "react";

import styles from "./Chart.module.css";
import BarChart from "../BarChart/BarChart";
import PieChart from "../PieChart/PieChart";

const Chart: FC = () => {
  return (
    <div className={styles.chart}>
      {/* <BarChart /> */}
      <PieChart />
    </div>
  );
};

export default Chart;
