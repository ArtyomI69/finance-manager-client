import { FC } from "react";

import styles from "./TransactionsTable.module.css";
import { ITransaction } from "../../../models/ITransaction";

interface TransactionsTableProps {
  transactions: ITransaction[];
}

const TransactionsTable: FC<TransactionsTableProps> = ({ transactions }) => {
  return (
    <table className={styles["transactions-table"]}>
      <thead>
        <tr>
          <th>Категория</th>
          <th>Описание</th>
          <th>Доход/Расход</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Автосервис</th>
          <th>Помыл машину</th>
          <th>-700₽</th>
        </tr>
        <tr>
          <th>Автосервис</th>
          <th>Помыл машину</th>
          <th>-700₽</th>
        </tr>
        <tr>
          <th>Автосервис</th>
          <th>Помыл машину</th>
          <th>-700₽</th>
        </tr>
        <tr>
          <th>Автосервис</th>
          <th>Помыл машину</th>
          <th>-700₽</th>
        </tr>
        <tr>
          <th>Автосервис</th>
          <th>Помыл машину</th>
          <th>-700₽</th>
        </tr>
        <tr>
          <th>Автосервис</th>
          <th>Помыл машину</th>
          <th>-700₽</th>
        </tr>
        <tr>
          <th>Автосервис</th>
          <th>Помыл машину</th>
          <th>-700₽</th>
        </tr>
        <tr>
          <th>Автосервис</th>
          <th>Помыл машину</th>
          <th>-700₽</th>
        </tr>
        <tr>
          <th>Автосервис</th>
          <th>Помыл машину</th>
          <th>-700₽</th>
        </tr>
        <tr>
          <th>Автосервис</th>
          <th>Помыл машину</th>
          <th>-700₽</th>
        </tr>
        <tr>
          <th>Автосервис</th>
          <th>Помыл машину</th>
          <th>-700₽</th>
        </tr>
        <tr>
          <th>Автосервис</th>
          <th>Помыл машину</th>
          <th>-700₽</th>
        </tr>
        <tr>
          <th>Автосервис</th>
          <th>Помыл машину</th>
          <th>-700₽</th>
        </tr>
        <tr>
          <th>Автосервис</th>
          <th>Помыл машину</th>
          <th>-700₽</th>
        </tr>
        <tr>
          <th>Автосервис</th>
          <th>Помыл машину</th>
          <th>-700₽</th>
        </tr>
        <tr>
          <th>Автосервис</th>
          <th>Помыл машину</th>
          <th>-700₽</th>
        </tr>
        <tr>
          <th>Зарплата</th>
          <th>-</th>
          <th>-499₽</th>
        </tr>
      </tbody>
    </table>
  );
};

export default TransactionsTable;