import { FC } from "react";

import styles from "./HeaderUserInfo.module.css";
import UserPhoto from "../../UserPhoto/UserPhoto";

const HeaderUserInfo: FC = () => {
  return (
    <div className={styles["header-user-info"]}>
      <div className={styles["user-avatar"]}>
        <UserPhoto />
      </div>
      <p className={styles["user-name"]}>Евгегний Петров</p>
      <p className={styles["user-balance"]}>Баланс: $999.99</p>
    </div>
  );
};

export default HeaderUserInfo;
