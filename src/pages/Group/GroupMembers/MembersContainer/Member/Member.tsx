import { FC } from "react";
import { faCrown, faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Member.module.css";
import { Gender } from "../../../../../models/Gender";
import UserPhoto from "../../../../../components/UserPhoto/UserPhoto";

interface MemberProps {
  isGroupLeader: boolean;
  name: string;
  gender: Gender;
  balance: number;
  isMe: boolean;
}

const Member: FC<MemberProps> = ({ isGroupLeader, name, balance, gender, isMe }) => {
  return (
    <li className={styles.member}>
      <UserPhoto gender={gender} />
      <p className={styles.name}>{name}</p>
      <p className={styles.balance}>
        Баланс:<span>{balance}₽</span>
      </p>
      {isGroupLeader && !isMe && (
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
