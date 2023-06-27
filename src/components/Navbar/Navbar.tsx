import { FC } from "react";
import {
  faChartLine,
  faUser,
  faMoneyBillTrendUp,
  faMoneyBillWave,
  faMoneyBillTransfer,
  faRightFromBracket,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Navbar.module.css";
import { authAPI } from "../../store/services/AuthService";
import NavItem from "./NavItem/NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavbarProps {
  closeMobileNavBar: () => void;
}

const Navbar: FC<NavbarProps> = ({ closeMobileNavBar }) => {
  const [logout] = authAPI.useLogoutMutation();

  return (
    <nav className={styles.navbar}>
      <ul className={styles["nav-list"]}>
        <NavItem
          text="Транзакции"
          to="/"
          icon={faChartLine}
          closeMobileNavBar={closeMobileNavBar}
        />
        <NavItem
          text="Мой профиль"
          to="/profile"
          icon={faUser}
          closeMobileNavBar={closeMobileNavBar}
        />
        <NavItem
          text="Группа"
          to="/group"
          icon={faUserGroup}
          closeMobileNavBar={closeMobileNavBar}
        />
        <NavItem
          text="Переводы"
          to="/money-transfers"
          icon={faMoneyBillTransfer}
          closeMobileNavBar={closeMobileNavBar}
        />
        <NavItem
          text="Доходы"
          to="/incomes"
          icon={faMoneyBillTrendUp}
          closeMobileNavBar={closeMobileNavBar}
        />
        <NavItem
          text="Расходы"
          to="/expenses"
          icon={faMoneyBillWave}
          closeMobileNavBar={closeMobileNavBar}
        />
        <li>
          <button onClick={() => logout()}>
            <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>Выйти
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
