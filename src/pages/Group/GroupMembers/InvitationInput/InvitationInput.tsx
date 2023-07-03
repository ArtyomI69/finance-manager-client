import { FC, useRef, useEffect } from "react";
import { toast } from "react-toastify";

import styles from "./InvitationInput.module.css";
import { invitationsAPI } from "../../../../store/services/InvitationService";

const InvitationInput: FC = () => {
  const [addInvitation, { isSuccess, isError }] = invitationsAPI.useAddInvitationMutation();
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isError)
      toast.error(
        "Не удалось пригласить пользователя либо данный пользователь уже приглашён. Убедитесь что указан верный id"
      );
    if (isSuccess) toast.success("Пользователь успешно приглашён в группу");
  }, [isError, isSuccess]);

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
