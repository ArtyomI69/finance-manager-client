import { FC } from "react";

import styles from "./GroupMembers.module.css";
import InvitationInput from "./InvitationInput/InvitationInput";
import LeaveGroupButton from "./LeaveGroupButton/LeaveGroupButton";
import MembersContainer from "./MembersContainer/MembersContainer";

const GroupMembers: FC = () => {
  const isGroupLeader = true;

  return (
    <div className={styles["group-members"]}>
      {isGroupLeader && <InvitationInput />}
      <MembersContainer isGroupLeader={isGroupLeader} />
      {!isGroupLeader && <LeaveGroupButton />}
    </div>
  );
};

export default GroupMembers;
