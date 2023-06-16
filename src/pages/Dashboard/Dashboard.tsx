import { FC } from "react";

import styles from "./Dashboard.module.css";
import { useAppSelector } from "../../hooks/redux";
import { dashboardApi } from "../../services/DashboardService";
import ChartForm from "./ChartForm/ChartForm";
import Chart from "./Chart/Chart";
import BalanceContainer from "./BalanceContainer/BalanceContainer";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Dashboard: FC = () => {
  const { timestamp } = useAppSelector((state) => state.dashboardReducer);
  const { isLoading } = dashboardApi.useFetchTransactionsMonthQuery(timestamp);

  return (
    <div className={styles.dashboard}>
      <ChartForm />
      {isLoading && <LoadingSpinner />}
      {!isLoading && <Chart />}
      {!isLoading && <BalanceContainer />}
    </div>
  );
};

export default Dashboard;
