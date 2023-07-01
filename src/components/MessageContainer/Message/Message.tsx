import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faXmarkCircle, faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./Message.module.css";
import { MessageType } from "../../../models/MessageType";

interface MessageProps {
  text: string;
  type?: MessageType;
}

const Message: FC<MessageProps> = ({ text, type }) => {
  const className = [styles.message];
  if (type === "SUCCESS") className.push(styles.success);
  if (type === "ERROR") className.push(styles.error);

  return (
    <li className={className.join(" ")}>
      <p>{text}</p>
      {type === "SUCCESS" && <FontAwesomeIcon className={styles.icon} icon={faCheckCircle} />}
      {type === "ERROR" && <FontAwesomeIcon className={styles.icon} icon={faXmarkCircle} />}
      <button>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </li>
  );
};

export default Message;
