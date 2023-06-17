import { FC } from "react";

import styles from "./MembersContainer.module.css";
import Member from "./Member/Member";

const MembersContainer: FC = () => {
  return (
    <div className={styles["members-container"]}>
      <ul>
        <Member />
        <Member />
        <Member />
      </ul>
    </div>
  );
};

export default MembersContainer;
