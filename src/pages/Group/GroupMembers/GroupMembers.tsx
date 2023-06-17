import { FC } from "react";

import styles from "./GroupMembers.module.css";
import InvitationInput from "./InvitationInput/InvitationInput";
import MembersContainer from "./MembersContainer/MembersContainer";

const GroupMembers: FC = () => {
  return (
    <div className={styles["group-members"]}>
      <InvitationInput />
      <MembersContainer />
    </div>
  );
};

export default GroupMembers;
