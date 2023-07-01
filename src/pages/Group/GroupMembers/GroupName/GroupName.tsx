import { FC, useState, useRef } from "react";
import { faPen, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./GroupName.module.css";
import { groupAPI } from "../../../../store/services/GroupService";
import ErrorModal from "../../../../components/ErrorModal/ErrorModal";

interface GroupNameProps {
  isGroupLeader: boolean;
}

const GroupName: FC<GroupNameProps> = ({ isGroupLeader }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { data } = groupAPI.useFetchGroupNameQuery();
  const [updateGroupName, { isError: isUpdateError }] = groupAPI.useUpdateGroupNameMutation();
  const groupNameInput = useRef<HTMLInputElement>(null);

  const editGroupNameHandler = () => {
    setIsEditing(true);
  };

  const acceptButtonHandler = () => {
    updateGroupName({ name: groupNameInput.current!.value });
    setIsEditing(false);
  };

  const cancelButtonHandler = () => {
    setIsEditing(false);
  };

  return (
    <>
      {isUpdateError && (
        <ErrorModal message="Не удалось обновить название группы. Пожалуйста попробуйте позже" />
      )}
      <div className={styles["group-name"]}>
        {!isEditing && (
          <>
            <p>{data?.name}</p>
            {isGroupLeader && (
              <button onClick={editGroupNameHandler}>
                <FontAwesomeIcon icon={faPen} />
              </button>
            )}
          </>
        )}

        {isEditing && (
          <>
            <input ref={groupNameInput} type="text" defaultValue={data?.name} />
            <button className={styles.accept} onClick={acceptButtonHandler}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button className={styles.cancel} onClick={cancelButtonHandler}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default GroupName;
