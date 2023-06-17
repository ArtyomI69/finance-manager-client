import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import styles from "./Group.module.css";
import GroupNavbar from "./GroupNavbar/GroupNavbar";

const Group: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/group/members");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.group}>
      <GroupNavbar />
      <Outlet />
    </div>
  );
};

export default Group;
