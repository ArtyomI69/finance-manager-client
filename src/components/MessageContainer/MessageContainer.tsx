import { FC } from "react";
import ReactDom from "react-dom";

import styles from "./MessageContainer.module.css";
import Message from "./Message/Message";

const portalElement = document.getElementById("message")!;

const MessageContainer: FC = () => {
  return (
    <>
      {ReactDom.createPortal(
        <div className={styles["message-container"]}>
          <ul>
            <Message text="Данные об аккаунте успешно обновленны" type="SUCCESS" />
            <Message
              text="Не удалось обновить данные об аккаунте. Пожалуйста повторите позже"
              type="ERROR"
            />
          </ul>
        </div>,
        portalElement
      )}
    </>
  );
};

export default MessageContainer;
