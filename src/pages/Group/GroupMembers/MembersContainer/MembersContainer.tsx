import { FC } from "react";

import styles from "./MembersContainer.module.css";
import Member from "./Member/Member";

interface MembersContainerProps {
  isGroupLeader: boolean;
}

const MembersContainer: FC<MembersContainerProps> = ({ isGroupLeader }) => {
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
