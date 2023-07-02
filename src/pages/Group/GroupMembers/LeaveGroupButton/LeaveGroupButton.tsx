import { FC, useEffect } from "react";
import { toast } from "react-toastify";

import styles from "./LeaveGroupButton.module.css";
import { groupAPI } from "../../../../store/services/GroupService";

const LeaveGroupButton: FC = () => {
  const [leaveGroup, { isError, error }] = groupAPI.useLeaveGroupMutation();

  useEffect(() => {
    if (isError) toast.error("Не удалось покинуть группу. Пожалуйста попробуйте позже");
    if (error) console.log(error);
  }, [isError, error]);

  const leaveGroupHandler = () => {
    leaveGroup();
  };

  return (
    <button onClick={leaveGroupHandler} className={styles["leave-group-button"]}>
      Выйти из группы
    </button>
  );
};

export default LeaveGroupButton;
