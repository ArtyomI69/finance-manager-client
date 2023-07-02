import { FC } from "react";

import styles from "./GroupInvitations.module.css";
import { groupAPI } from "../../../store/services/GroupService";
import Invitation from "./Invitation/Invitation";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const GroupInvitations: FC = () => {
  const { data, isLoading } = groupAPI.useFetchAllInvitationsQuery();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className={styles["group-invitations"]}>
      <ul>
        {data?.map(({ id, personFrom }) => (
          <Invitation key={id} personFrom={personFrom} id={id} />
        ))}
      </ul>
    </div>
  );
};

export default GroupInvitations;
