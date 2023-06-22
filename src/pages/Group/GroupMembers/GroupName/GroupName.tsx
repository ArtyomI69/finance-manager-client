import { FC, useState } from "react";
import { faPen, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./GroupName.module.css";

interface GroupNameProps {
  isGroupLeader: boolean;
}

const GroupName: FC<GroupNameProps> = ({ isGroupLeader }) => {
  const [isEditing, setIsEditing] = useState(false);

  const editGroupNameHandler = () => {
    setIsEditing(true);
  };

  const acceptButtonHandler = () => {
    setIsEditing(false);
  };

  const cancelButtonHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles["group-name"]}>
      {!isEditing && (
        <>
          <p>Семья Петровых</p>
          {isGroupLeader && (
            <button onClick={editGroupNameHandler}>
              <FontAwesomeIcon icon={faPen} />
            </button>
          )}
        </>
      )}

      {isEditing && (
        <>
          <input type="text" />
          <button className={styles.accept} onClick={acceptButtonHandler}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button className={styles.cancel} onClick={cancelButtonHandler}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </>
      )}
    </div>
  );
};

export default GroupName;
