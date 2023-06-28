import { FC } from "react";

import styles from "./Dashboard.module.css";
import { useAppSelector } from "../../hooks/redux";
import { transactionsAPI } from "../../store/services/TransactionsService";
import ChartForm from "./ChartForm/ChartForm";
import TransactionsData from "./TransactionsVisualization/TransactionsVisualization";
import BalanceContainer from "./BalanceContainer/BalanceContainer";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ErrorModal from "../../components/ErrorModal/ErrorModal";

const Dashboard: FC = () => {
  const { timestamp, transactionsVisualization } = useAppSelector(
    (state) => state.dashboardReducer
  );
  const { data, isLoading, isError } = transactionsAPI.useFetchTransactionsMonthQuery({
    timestamp,
    transactionsVisualization,
  });

  return (
    <div className={styles.dashboard}>
      {isError && (
        <ErrorModal message="Не удалось получить транзакции. Проверьте ваше интернет подключение." />
      )}
      <ChartForm />
      {(isLoading || isError) && <LoadingSpinner />}
      {!isLoading && !isError && <TransactionsData transactions={data!} />}
      {!isLoading && !isError && <BalanceContainer transactions={data!} />}
    </div>
  );
};

export default Dashboard;
