import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./Invitation.module.css";
import UserPhoto from "../../../../components/UserPhoto/UserPhoto";

const Invitation: FC = () => {
  return (
    <li className={styles.invitation}>
      <UserPhoto />
      <p className={styles.name}>
        <span>Joe Schmoe</span> пришлашает вас в свою группу
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
