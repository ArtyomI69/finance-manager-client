import { FC } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import styles from "./NavItem.module.css";

interface NavItemProps {
  text: string;
  to: string;
  icon: IconProp;
  closeMobileNavBar: () => void;
}

const NavItem: FC<NavItemProps> = ({ text, icon, to, closeMobileNavBar }) => {
  return (
    <li className={styles["nav-item"]}>
      <NavLink
        onClick={closeMobileNavBar}
        className={({ isActive }) => (isActive ? styles.active : "")}
        to={to}
      >
        <FontAwesomeIcon icon={icon} />
        <span>{text}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
