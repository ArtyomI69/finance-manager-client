import { FC } from "react";

import styles from "./LoadingSpinner.module.css";

const LoadingSpinner: FC = () => {
  return (
    <div className={styles["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
