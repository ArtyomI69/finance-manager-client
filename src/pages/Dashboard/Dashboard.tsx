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
  const { timestamp, transactionsVisualization, allTime } = useAppSelector(
    (state) => state.dashboardReducer
  );
  const { data, isLoading, isFetching, isError } = transactionsAPI.useFetchTransactionsQuery({
    timestamp,
    transactionsVisualization,
    allTime,
  });
  useEffect(() => {
    if (isError) toast.error("Не удалось получить транзакции. Проверьте ваше интернет подключение");
  }, [isError]);

  return (
    <div className={styles.dashboard}>
      <ChartForm />
      {(isLoading || isError || isFetching) && <LoadingSpinner />}
      {!isLoading && !isFetching && !isError && <TransactionsData transactions={data!} />}
      {!isLoading && !isFetching && !isError && <BalanceContainer transactions={data!} />}
    </div>
  );
};

export default Dashboard;
