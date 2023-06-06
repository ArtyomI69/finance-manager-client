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

const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["nav-list"]}>
        <li>
          <NavLink to="/profile">
            <FontAwesomeIcon icon={faUser} />
            <span>Мой профиль</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChartLine} />
            <span>Транзакции</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/incomes">
            <FontAwesomeIcon icon={faMoneyBillTrendUp} />
            <span>Доходы</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/expenses">
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
