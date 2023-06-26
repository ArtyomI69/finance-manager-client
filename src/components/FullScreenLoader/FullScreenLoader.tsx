import { FC } from "react";

import styles from "./FullScreenLoader.module.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const FullScreenLoader: FC = () => {
  return (
    <div className={styles["full-screen-loader"]}>
      <LoadingSpinner />
    </div>
  );
};

export default FullScreenLoader;
