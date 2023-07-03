import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./EmailMessage.module.css";

interface EmailMessageProps {
  title: string;
  text: string;
}

const EmailMessage: FC<EmailMessageProps> = ({ title, text }) => {
  return (
    <div className={styles["confirm-email"]}>
      <FontAwesomeIcon icon={faEnvelope} />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default EmailMessage;
