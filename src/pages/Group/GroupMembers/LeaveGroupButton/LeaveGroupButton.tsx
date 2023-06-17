import { FC } from "react";

import styles from "./LeaveGroupButton.module.css";

const LeaveGroupButton: FC = () => {
  return <button className={styles["leave-group-button"]}>Выйти из группы</button>;
};

export default LeaveGroupButton;
