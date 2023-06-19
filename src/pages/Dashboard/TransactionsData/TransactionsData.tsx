import { FC } from "react";

import styles from "./TransactionsData.module.css";
import { useAppSelector } from "../../../hooks/redux";
import BarChart from "../BarChart/BarChart";
import PieChart from "../PieChart/PieChart";
import TransactionsTable from "../TransactionsTable/TransactionsTable";

const TransactionsData: FC = () => {
  const { transactionsDataType } = useAppSelector((state) => state.dashboardReducer);

  const isTableSelected = transactionsDataType === "all-transactions";

  return (
    <div
      className={[
        styles["transactions-data"],
        isTableSelected ? styles["transactions-data--table"] : "",
      ].join(" ")}
    >
      {transactionsDataType === "histogram" && <BarChart />}
      {transactionsDataType === "piechart" && <PieChart />}
      {transactionsDataType === "all-transactions" && <TransactionsTable />}
    </div>
  );
};

export default TransactionsData;
