import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./Invitation.module.css";
import { IInvitation } from "../../../../models/IInvitations";
import UserPhoto from "../../../../components/UserPhoto/UserPhoto";

const Invitation: FC<IInvitation> = ({ personFrom: { full_name, gender, team } }) => {
  return (
    <li className={styles.invitation}>
      <UserPhoto gender={gender} />
      <p className={styles.name}>
        <span>{full_name}</span> пришлашает вас в <span>{team.name}</span>
      </p>
      <div className={styles.buttons}>
        <button className={styles["accept-button"]}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button className={styles["decline-button"]}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </li>
  );
};

export default Invitation;
