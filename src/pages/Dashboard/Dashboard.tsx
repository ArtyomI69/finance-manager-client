import { FC } from "react";

import styles from "./Dashboard.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";

const Dashboard: FC = () => {
  return (
    <div className={styles.dashboard}>
      <PageTitle />
    </div>
  );
};

export default Dashboard;
