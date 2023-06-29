import { FC } from "react";

import styles from "./TransactionsTable.module.css";
import { ITransaction } from "../../../models/ITransaction";

interface TransactionsTableProps {
  transactions: ITransaction[];
}

const TransactionsTable: FC<TransactionsTableProps> = ({ transactions }) => {
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

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
        {sortedTransactions.map(({ category, description, amount, createdAt, id }) => (
          <tr key={id}>
            <th>{category.name}</th>
            <th>{description}</th>
            <th className={amount > 0 ? styles.income : styles.expense}>{amount}₽</th>
            <th>{new Date(createdAt).toLocaleDateString("ru-Ru")}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
