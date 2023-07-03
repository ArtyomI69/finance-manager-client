import { FC, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

import styles from "./Invitation.module.css";
import { invitationsAPI } from "../../../../store/services/InvitationService";
import { IInvitation } from "../../../../models/IInvitations";
import UserPhoto from "../../../../components/UserPhoto/UserPhoto";

const Invitation: FC<IInvitation> = ({ personFrom: { full_name, gender, team }, id }) => {
  const [acceptInvitation, { isError, isSuccess }] = invitationsAPI.useAcceptInvitationMutation();
  const [declineInvitation, { isError: isDeclineError }] =
    invitationsAPI.useDeclineInvitationMutation();

  useEffect(() => {
    if (isError) toast.error("Не удалось принять приглашение");
    if (isDeclineError) toast.error("Не удалось удалить приглашение, пожалуйста попробуйте позже");
    if (isSuccess) toast.success("Приглашение успешно принято");
  }, [isError, isSuccess, isDeclineError]);

  const acceptInvitationHandler = () => {
    acceptInvitation({ id });
  };

  const declineInvitationHandler = () => {
    declineInvitation({ id });
  };

  return (
    <li className={styles.invitation}>
      <UserPhoto gender={gender} />
      <p className={styles.name}>
        <span>{full_name}</span> пришлашает вас в <span>{team.name}</span>
      </p>
      <div className={styles.buttons}>
        <button onClick={acceptInvitationHandler} className={styles["accept-button"]}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button onClick={declineInvitationHandler} className={styles["decline-button"]}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </li>
  );
};

export default Invitation;
