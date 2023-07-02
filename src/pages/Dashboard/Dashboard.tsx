import { FC, useEffect } from "react";
import { toast } from "react-toastify";

import styles from "./Dashboard.module.css";
import { useAppSelector } from "../../hooks/redux";
import { transactionsAPI } from "../../store/services/TransactionsService";
import ChartForm from "./ChartForm/ChartForm";
import TransactionsData from "./TransactionsVisualization/TransactionsVisualization";
import BalanceContainer from "./BalanceContainer/BalanceContainer";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Dashboard: FC = () => {
  const { timestamp, transactionsVisualization } = useAppSelector(
    (state) => state.dashboardReducer
  );
  const { data, isLoading, isError } = transactionsAPI.useFetchTransactionsMonthQuery({
    timestamp,
    transactionsVisualization,
  });
  useEffect(() => {
    if (isError) toast.error("Не удалось получить транзакции. Проверьте ваше интернет подключение");
  }, [isError]);

  return (
    <div className={styles.dashboard}>
      <ChartForm />
      {(isLoading || isError) && <LoadingSpinner />}
      {!isLoading && !isError && <TransactionsData transactions={data!} />}
      {!isLoading && !isError && <BalanceContainer transactions={data!} />}
    </div>
  );
};

export default Dashboard;
