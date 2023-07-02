import { FC, useEffect } from "react";
import { toast } from "react-toastify";

import styles from "./MembersContainer.module.css";
import { groupAPI } from "../../../../store/services/GroupService";
import { userAPI } from "../../../../store/services/UserService";
import Member from "./Member/Member";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";

interface MembersContainerProps {
  isGroupLeader: boolean;
}

const MembersContainer: FC<MembersContainerProps> = ({ isGroupLeader }) => {
  const { data, isLoading, isError } = groupAPI.useFetchAllGroupMembersQuery();
  const { data: meData } = userAPI.useFetchMeQuery();
  useEffect(() => {
    if (isError) toast.error("Не удалось загрузить членов группы");
  }, [isError]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className={styles["members-container"]}>
      <ul>
        {data?.map(({ balance, gender, full_name, id }) => (
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
