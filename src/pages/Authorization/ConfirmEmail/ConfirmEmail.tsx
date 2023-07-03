import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./ConfirmEmail.module.css";

const ConfirmEmail: FC = () => {
  return (
    <div className={styles["confirm-email"]}>
      <FontAwesomeIcon icon={faEnvelope} />
      <h1>Благодарим вас за то что выбрали наш финансовый мэнэджер!</h1>
      <p>
        Потвердите ваш адрес электронной почты, нажав на ссылку, которую мы отправили на
        bruh@mail.ru
      </p>
    </div>
  );
};

export default ConfirmEmail;
