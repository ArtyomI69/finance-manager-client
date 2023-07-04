import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./EmailMessage.module.css";
import { useAppSelector } from "../../../hooks/redux";

interface EmailMessageProps {
  title: string;
}

const EmailMessage: FC<EmailMessageProps> = ({ title }) => {
  const { email } = useAppSelector((state) => state.authReducer);

  return (
    <div className={styles["confirm-email"]}>
      <FontAwesomeIcon icon={faEnvelope} />
      <h1>{title}</h1>
      <p>
        Потвердите ваш адрес электронной почты, нажав на ссылку, которую мы отправили на {email}
      </p>
    </div>
  );
};

export default EmailMessage;
