import { FC } from "react";

import styles from "./BalanceContainer.module.css";
import { useAppSelector } from "../../../hooks/redux";
import { ITransaction } from "../../../models/ITransaction";
import { IGroupedTransaction } from "../../../models/IGroupedTransaction";
import BalanceItem from "./BalanceItem/BalanceItem";

interface BalanceContainerProps {
  transactions: ITransaction[] | IGroupedTransaction[];
}

const BalanceContainer: FC<BalanceContainerProps> = ({ transactions }) => {
  const { transactionsVisualization } = useAppSelector((state) => state.dashboardReducer);

  let income = 0;
  let expenses = 0;
  let balance = 0;
  switch (transactionsVisualization) {
    case "histogram--person":
    case "histogram--group":
    case "table--group":
    case "table--person": {
      (transactions as ITransaction[]).forEach(({ amount }) => {
        if (amount > 0) income += amount;
        else expenses += Math.abs(amount);
      });
      break;
    }
    case "piechart--person--income":
    case "piechart--group--income": {
      (transactions as IGroupedTransaction[]).forEach(({ amount }) => {
        income += amount;
      });
      break;
    }
    case "piechart--person--expenses":
    case "piechart--group--expenses": {
      (transactions as IGroupedTransaction[]).forEach(({ amount }) => {
        expenses += Math.abs(amount);
      });
      break;
    }
    default:
  }
  balance = income - expenses;

  return (
    <div className={styles["balance-container"]}>
      <BalanceItem text="Суммарная прибыль" value={income} valueColor="green" />
      <BalanceItem text="Суммарные расходы" value={expenses} valueColor="red" />
      <BalanceItem text="Баланс" value={balance} valueColor="black" />
    </div>
  );
};

export default BalanceContainer;
