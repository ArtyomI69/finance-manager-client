import { FC } from "react";

import styles from "./Dashboard.module.css";
import ChartForm from "./ChartForm/ChartForm";
import Chart from "./Chart/Chart";
import BalanceContainer from "./BalanceContainer/BalanceContainer";

const Dashboard: FC = () => {
  return (
    <div className={styles.dashboard}>
      <ChartForm />
      <Chart />
      <BalanceContainer />
    </div>
  );
};

export default Dashboard;
