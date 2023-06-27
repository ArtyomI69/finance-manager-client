import { FC } from "react";

import styles from "./HeaderUserInfo.module.css";
import { userAPI } from "../../../store/services/UserService";
import UserPhoto from "../../UserPhoto/UserPhoto";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const HeaderUserInfo: FC = () => {
  const { data, isLoading } = userAPI.useFetchMeQuery();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className={styles["header-user-info"]}>
      <div className={styles["user-avatar"]}>
        <UserPhoto />
      </div>
      <p className={styles["user-name"]}>{data!.full_name}</p>
      <p className={styles["user-balance"]}>
        Баланс: <span>{data?.balance} ₽</span>
      </p>
    </div>
  );
};

export default HeaderUserInfo;
