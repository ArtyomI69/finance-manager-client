import { FC } from "react";

import styles from "./TransactionsVisualization.module.css";
import { useAppSelector } from "../../../hooks/redux";
import { ITransaction } from "../../../models/ITransaction";
import BarChart from "../BarChart/BarChart";
import PieChart from "../PieChart/PieChart";
import TransactionsTable from "../TransactionsTable/TransactionsTable";

interface TransactionsDataProps {
  transactions: ITransaction[];
}

const TransactionsData: FC<TransactionsDataProps> = ({ transactions }) => {
  const { transactionsDataType } = useAppSelector((state) => state.dashboardReducer);

  const isTableSelected = transactionsDataType === "table--all-transactions--person";

  return (
    <div
      className={[
        styles["transactions-data"],
        isTableSelected ? styles["transactions-data--table"] : "",
      ].join(" ")}
    >
      {transactionsDataType === "histogram" && <BarChart transactions={transactions} />}
      {transactionsDataType === "piechart" && <PieChart transactions={transactions} />}
      {transactionsDataType === "table--all-transactions--person" && (
        <TransactionsTable transactions={transactions} />
      )}
    </div>
  );
};

export default TransactionsData;
