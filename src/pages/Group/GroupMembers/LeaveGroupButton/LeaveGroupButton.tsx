import { FC, useEffect } from "react";
import { toast } from "react-toastify";

import styles from "./LeaveGroupButton.module.css";
import { groupAPI } from "../../../../store/services/GroupService";

const LeaveGroupButton: FC = () => {
  const [leaveGroup, { isError }] = groupAPI.useLeaveGroupMutation();

  const leaveGroupHandler = () => {
    leaveGroup();
  };

  useEffect(() => {
    if (isError) toast.error("Не удалось покинуть группу. Пожалуйста попробуйте позже");
  }, [isError]);

  return (
    <button onClick={leaveGroupHandler} className={styles["leave-group-button"]}>
      Выйти из группы
    </button>
  );
};

export default LeaveGroupButton;
