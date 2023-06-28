import { FC } from "react";

import styles from "./TransactionsVisualization.module.css";
import { useAppSelector } from "../../../hooks/redux";
import { ITransaction } from "../../../models/ITransaction";
import { IGroupedTransaction } from "../../../models/IGroupedTransaction";
import BarChart from "../BarChart/BarChart";
import PieChart from "../PieChart/PieChart";
import TransactionsTable from "../TransactionsTable/TransactionsTable";

interface TransactionsDataProps {
  transactions: ITransaction[] | IGroupedTransaction[];
}

const TransactionsData: FC<TransactionsDataProps> = ({ transactions }) => {
  const { transactionsVisualization } = useAppSelector((state) => state.dashboardReducer);

  const isTableSelected = transactionsVisualization === "table--person" || "table--group";

  let component;
  switch (transactionsVisualization) {
    case "histogram--person":
    case "histogram--group": {
      component = <BarChart transactions={transactions as ITransaction[]} />;
      break;
    }
    case "piechart--person--income":
    case "piechart--person--expenses":
    case "piechart--group--income":
    case "piechart--group--expenses": {
      component = <PieChart transactions={transactions as IGroupedTransaction[]} />;
      break;
    }
    case "table--group":
    case "table--person": {
      component = <TransactionsTable transactions={transactions as ITransaction[]} />;
      break;
    }
    default:
      component = <BarChart transactions={transactions as ITransaction[]} />;
  }

  return (
    <div
      className={[
        styles["transactions-visualization"],
        isTableSelected ? styles["transactions-visualization--table"] : "",
      ].join(" ")}
    >
      {component}
    </div>
  );
};

export default TransactionsData;
