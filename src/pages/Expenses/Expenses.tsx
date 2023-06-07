import { FC } from "react";

import styles from "./Expenses.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";

const Expenses: FC = () => {
  return (
    <div className={styles.expenses}>
      <PageTitle />
    </div>
  );
};

export default Expenses;
