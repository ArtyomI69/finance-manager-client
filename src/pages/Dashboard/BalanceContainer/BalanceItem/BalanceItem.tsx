import { FC } from "react";

import styles from "./Balance.module.css";

interface BalanceItemProps {
  text: string;
  value: number;
  valueColor: "red" | "green" | "black";
}

const BalanceItem: FC<BalanceItemProps> = ({ text, value, valueColor }) => {
  return (
    <div className={styles["balance-item"]}>
      <p className={styles.text}>{text}</p>
      <p className={styles.value} style={{ color: valueColor }}>
        {value}₽
      </p>
    </div>
  );
};

export default BalanceItem;
