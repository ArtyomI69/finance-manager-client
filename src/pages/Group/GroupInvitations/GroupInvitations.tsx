import { FC } from "react";

import styles from "./GroupInvitations.module.css";
import { groupInvitationsAPI } from "../../../services/GroupInvitationsService";
import Invitation from "./Invitation/Invitation";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const GroupInvitations: FC = () => {
  const { isLoading } = groupInvitationsAPI.useFetchAllInvitationsQuery();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className={styles["group-invitations"]}>
      <ul>
        <Invitation />
        <Invitation />
        <Invitation />
      </ul>
    </div>
  );
};

export default GroupInvitations;
