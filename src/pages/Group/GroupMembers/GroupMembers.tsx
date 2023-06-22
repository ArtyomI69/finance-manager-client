import { FC } from "react";

import styles from "./GroupMembers.module.css";
import InvitationInput from "./InvitationInput/InvitationInput";
import GroupName from "./GroupName/GroupName";
import MembersContainer from "./MembersContainer/MembersContainer";
import LeaveGroupButton from "./LeaveGroupButton/LeaveGroupButton";

const GroupMembers: FC = () => {
  const isGroupLeader = true;

  return (
    <div className={styles["group-members"]}>
      <InvitationInput />
      <GroupName isGroupLeader={isGroupLeader} />
      <MembersContainer isGroupLeader={isGroupLeader} />
      {!isGroupLeader && <LeaveGroupButton />}
    </div>
  );
};

export default GroupMembers;
