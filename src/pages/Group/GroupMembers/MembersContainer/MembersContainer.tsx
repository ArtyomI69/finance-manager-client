import { FC } from "react";

import styles from "./MembersContainer.module.css";
import { groupAPI } from "../../../../store/services/GroupService";
import { userAPI } from "../../../../store/services/UserService";
import Member from "./Member/Member";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
import ErrorModal from "../../../../components/ErrorModal/ErrorModal";

interface MembersContainerProps {
  isGroupLeader: boolean;
}

const MembersContainer: FC<MembersContainerProps> = ({ isGroupLeader }) => {
  const { data, isLoading, isError } = groupAPI.useFetchAllGroupMembersQuery();
  const { data: meData } = userAPI.useFetchMeQuery();

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <ErrorModal message="Не удалось получить членов группы" />;

  return (
    <div className={styles["members-container"]}>
      <ul>
        {data!.map(({ balance, gender, full_name, id }) => (
          <Member
            key={id}
            isMe={meData?.id === id}
            balance={balance}
            gender={gender}
            name={full_name}
            isGroupLeader={isGroupLeader}
          />
        ))}
      </ul>
    </div>
  );
};

export default MembersContainer;
