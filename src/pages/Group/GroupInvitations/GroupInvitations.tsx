import { FC } from "react";

import styles from "./GroupInvitations.module.css";
import { invitationsAPI } from "../../../store/services/InvitationsService";
import Invitation from "./Invitation/Invitation";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const GroupInvitations: FC = () => {
  const { isLoading } = invitationsAPI.useFetchAllInvitationsQuery();

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
