import { FC } from "react";
import { Outlet } from "react-router-dom";

import styles from "./Group.module.css";
import GroupNavbar from "./GroupNavbar/GroupNavbar";

const Group: FC = () => {
  return (
    <div className={styles.group}>
      <GroupNavbar />
      <Outlet />
    </div>
  );
};

export default Group;
