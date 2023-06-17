import { FC } from "react";
import { faCrown, faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Member.module.css";
import UserPhoto from "../../../../../components/UserPhoto/UserPhoto";

interface MemberProps {
  isGroupLeader: boolean;
}

const Member: FC<MemberProps> = ({ isGroupLeader }) => {
  return (
    <li className={styles.member}>
      <UserPhoto />
      <p className={styles.name}>Joe Schmoe</p>
      <p className={styles.balance}>
        Баланс:<span>999.99₽</span>
      </p>
      {isGroupLeader && (
        <div className={styles.buttons}>
          <button className={styles["make-group-leader-button"]}>
            <FontAwesomeIcon icon={faCrown} />
          </button>
          <button className={styles["remove-user-from-group-button"]}>
            <FontAwesomeIcon icon={faUserSlash} />
          </button>
        </div>
      )}
    </li>
  );
};

export default Member;
