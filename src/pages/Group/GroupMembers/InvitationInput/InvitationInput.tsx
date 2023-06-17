import { FC } from "react";

import styles from "./InvitationInput.module.css";

const InvitationInput: FC = () => {
  return (
    <div className={styles["invitation-input"]}>
      <input type="text" placeholder="ID участника" />
      <button>Пригласить</button>
    </div>
  );
};

export default InvitationInput;
