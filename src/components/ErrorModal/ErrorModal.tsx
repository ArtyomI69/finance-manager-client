import { FC, useState } from "react";

import styles from "./ErrorModal.module.css";
import Modal from "../Modal/Modal";

interface ErrorModalProps {
  message: string;
}

const ErrorModal: FC<ErrorModalProps> = ({ message }) => {
  const [isShowing, setIsShowing] = useState(true);

  const closeModalHandler = () => {
    setIsShowing(false);
  };

  if (!isShowing) return null;

  return (
    <Modal onCloseModal={closeModalHandler}>
      <div className={styles["error-modal"]}>
        <p className={styles.message}>{message}</p>
        <button className={styles.button} onClick={closeModalHandler}>
          Закрыть
        </button>
      </div>
    </Modal>
  );
};

export default ErrorModal;
