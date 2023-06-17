import { FC } from "react";

import styles from "./GroupInvitations.module.css";
import Invitation from "./Invitation/Invitation";

const GroupInvitations: FC = () => {
  return (
    <div className={styles["group-invitations"]}>
      <ul>
        <Invitation />
        <Invitation />
        <Invitation />
      </ul>
    </div>
  );
};

export default GroupInvitations;
