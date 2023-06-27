import { FC } from "react";

import styles from "./UserId.module.css";
import { userAPI } from "../../../store/services/UserService";

const UserId: FC = () => {
  const { data } = userAPI.useFetchMeQuery();

  return (
    <p className={styles["user-id"]}>
      ID:<span>{data?.id}</span>
    </p>
  );
};

export default UserId;
