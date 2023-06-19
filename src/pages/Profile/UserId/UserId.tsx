import { FC } from "react";

import styles from "./UserId.module.css";

const UserId: FC = () => {
  return (
    <p className={styles["user-id"]}>
      ID:<span>312312312321</span>
    </p>
  );
};

export default UserId;
