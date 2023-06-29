import { FC } from "react";

import styles from "./MembersContainer.module.css";
import { groupAPI } from "../../../../store/services/GroupService";
import Member from "./Member/Member";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";

interface MembersContainerProps {
  isGroupLeader: boolean;
}

const MembersContainer: FC<MembersContainerProps> = ({ isGroupLeader }) => {
  const { isLoading } = groupAPI.useFetchAllGroupMembersQuery();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className={styles["members-container"]}>
      <ul>
        <Member isGroupLeader={isGroupLeader} />
        <Member isGroupLeader={isGroupLeader} />
        <Member isGroupLeader={isGroupLeader} />
      </ul>
    </div>
  );
};

export default MembersContainer;
