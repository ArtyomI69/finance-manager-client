import { FC } from "react";

import styles from "./BalanceContainer.module.css";
import BalanceItem from "./BalanceItem/BalanceItem";

const BalanceContainer: FC = () => {
  return (
    <div className={styles["balance-container"]}>
      <BalanceItem text="Суммарная прибыль" value={1000} valueColor="green" />
      <BalanceItem text="Суммарные расходы" value={250} valueColor="red" />
      <BalanceItem text="Баланс" value={750} valueColor="black" />
    </div>
  );
};

export default BalanceContainer;
