import { FC } from "react";

import styles from "./Chart.module.css";
import BarChart from "../BarChart/BarChart";

const Chart: FC = () => {
  return (
    <div className={styles.chart}>
      <BarChart />
    </div>
  );
};

export default Chart;
