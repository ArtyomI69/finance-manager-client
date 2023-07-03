import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

import styles from "./GroupNavbar.module.css";
import { invitationsAPI } from "../../../store/services/InvitationService";

const GroupNavbar: FC = () => {
  const { pathname } = useLocation();
  const { data } = invitationsAPI.useFetchAllInvitationsQuery();

  return (
    <div className={styles["group-navbar"]}>
      <ul>
        <li>
          <NavLink
            to="/group/members"
            className={({ isActive }) => (isActive || pathname === "/group" ? styles.active : "")}
          >
            <p>Участники</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/group/invitations"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <p>Приглашения</p>
            {data && data.length > 0 ? <span>{data.length}</span> : null}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default GroupNavbar;
