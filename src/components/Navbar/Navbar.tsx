import { FC } from "react";
import {
  faChartLine,
  faUser,
  faMoneyBillTrendUp,
  faMoneyBillTransfer,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem";

interface NavbarProps {
  closeMobileNavBar: () => void;
}

const Navbar: FC<NavbarProps> = ({ closeMobileNavBar }) => {
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
          text="Доходы"
          to="/incomes"
          icon={faMoneyBillTrendUp}
          closeMobileNavBar={closeMobileNavBar}
        />
        <NavItem
          text="Расходы"
          to="/expenses"
          icon={faMoneyBillTransfer}
          closeMobileNavBar={closeMobileNavBar}
        />
        <NavItem
          text="Выйти"
          to="/exit"
          icon={faRightFromBracket}
          closeMobileNavBar={closeMobileNavBar}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
