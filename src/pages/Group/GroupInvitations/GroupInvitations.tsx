import { FC } from "react";

import styles from "./GroupInvitations.module.css";
import { invitationsAPI } from "../../../store/services/InvitationService";
import Invitation from "./Invitation/Invitation";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const GroupInvitations: FC = () => {
  const { data, isLoading } = invitationsAPI.useFetchAllInvitationsQuery();

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
