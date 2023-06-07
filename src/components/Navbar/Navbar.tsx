import { FC } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUser,
  faMoneyBillTrendUp,
  faMoneyBillTransfer,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Navbar.module.css";

interface NavbarProps {
  closeMobileNavBar: () => void;
}

const Navbar: FC<NavbarProps> = ({ closeMobileNavBar }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["nav-list"]}>
        <li>
          <NavLink
            onClick={closeMobileNavBar}
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/"
          >
            <FontAwesomeIcon icon={faChartLine} />
            <span>Транзакции</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeMobileNavBar}
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/profile"
          >
            <FontAwesomeIcon icon={faUser} />
            <span>Мой профиль</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeMobileNavBar}
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/incomes"
          >
            <FontAwesomeIcon icon={faMoneyBillTrendUp} />
            <span>Доходы</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeMobileNavBar}
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/expenses"
          >
            <FontAwesomeIcon icon={faMoneyBillTransfer} />
            <span>Расходы</span>
          </NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span>Выйти</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
