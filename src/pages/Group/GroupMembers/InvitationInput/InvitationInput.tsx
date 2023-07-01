import { FC, useRef } from "react";

import styles from "./InvitationInput.module.css";
import { groupAPI } from "../../../../store/services/GroupService";

const InvitationInput: FC = () => {
  const [addInvitation] = groupAPI.useAddInvitationMutation();
  const inputRef = useRef<HTMLInputElement>(null);

  const invitePerson = async () => {
    await addInvitation({ personTo: { id: +inputRef.current!.value } });
  };

  return (
    <div className={styles["invitation-input"]}>
      <input ref={inputRef} type="text" placeholder="ID участника" />
      <button onClick={invitePerson}>Пригласить</button>
    </div>
  );
};

export default InvitationInput;
