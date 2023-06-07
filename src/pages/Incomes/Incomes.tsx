import { FC } from "react";

import styles from "./Incomes.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";

const Incomes: FC = () => {
  return (
    <div className={styles.incomes}>
      <PageTitle />
    </div>
  );
};

export default Incomes;
