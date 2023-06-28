import { FC } from "react";

import styles from "./TransactionsTable.module.css";
import { ITransaction } from "../../../models/ITransaction";

interface TransactionsTableProps {
  transactions: ITransaction[];
}

const TransactionsTable: FC<TransactionsTableProps> = ({ transactions }) => {
  const sortedTransactions = [...transactions].sort((a, b) => a.created_at - b.created_at);

  return (
    <table className={styles["transactions-table"]}>
      <thead>
        <tr>
          <th>Категория</th>
          <th>Описание</th>
          <th>Доход/Расход</th>
          <th>Дата</th>
        </tr>
      </thead>
      <tbody>
        {sortedTransactions.map(({ category, description, amount, created_at, id }) => (
          <tr key={id}>
            <th>{category.name}</th>
            <th>{description}</th>
            <th className={amount > 0 ? styles.income : styles.expense}>{amount}₽</th>
            <th>{new Date(created_at).toLocaleDateString("ru-Ru")}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
