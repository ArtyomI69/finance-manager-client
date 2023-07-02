import { FC, useEffect } from "react";
import { faCrown, faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

import styles from "./Member.module.css";
import { groupAPI } from "../../../../../store/services/GroupService";
import { Gender } from "../../../../../models/Gender";
import UserPhoto from "../../../../../components/UserPhoto/UserPhoto";

interface MemberProps {
  isGroupLeader: boolean;
  name: string;
  gender: Gender;
  balance: number;
  isMe: boolean;
  id: number;
}

const Member: FC<MemberProps> = ({ isGroupLeader, name, balance, gender, isMe, id }) => {
  const [giveLeader, { isSuccess, isError }] = groupAPI.useGiveLeaderMutation();
  const [kickMember, { isSuccess: isKickSuccess, isError: isKickError }] =
    groupAPI.useKickMemberMutation();

  useEffect(() => {
    if (isSuccess) toast.success("Лидерсто группы успешно переданно");
    if (isError) toast.error("Не удалось передать лидерство другому члену группы");
    if (isKickSuccess) toast.success("Пользователь успешно кикнут");
    if (isKickError) toast.error("Не удалось кикнуть пользователя из группы");
  }, [isSuccess, isError, isKickSuccess, isKickError]);

  const giveLeaderHandler = () => {
    giveLeader({ id });
  };

  const kickMemberHandler = () => {
    kickMember({ id });
  };

  return (
    <li className={styles.member}>
      <UserPhoto gender={gender} />
      <p className={styles.name}>{name}</p>
      <p className={styles.balance}>
        Баланс:<span>{balance}₽</span>
      </p>
      {isGroupLeader && !isMe && (
        <div className={styles.buttons}>
          <button onClick={giveLeaderHandler} className={styles["make-group-leader-button"]}>
            <FontAwesomeIcon icon={faCrown} />
          </button>
          <button onClick={kickMemberHandler} className={styles["remove-user-from-group-button"]}>
            <FontAwesomeIcon icon={faUserSlash} />
          </button>
        </div>
      )}
      {isMe && <p className={styles.me}>Я</p>}
    </li>
  );
};

export default Member;
