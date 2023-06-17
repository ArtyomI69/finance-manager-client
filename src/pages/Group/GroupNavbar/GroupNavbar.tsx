import { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./GroupNavbar.module.css";

const GroupNavbar: FC = () => {
  return (
    <div className={styles["group-navbar"]}>
      <ul>
        <li>
          <NavLink
            to="/group/members"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Участники
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/group/invitations"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Приглашения
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default GroupNavbar;
