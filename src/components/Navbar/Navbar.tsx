import { FC } from "react";
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
          <FontAwesomeIcon icon={faUser} />
          <span>Мой профиль</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faChartLine} />
          <span>Транзакции</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faMoneyBillTrendUp} />
          <span>Доходы</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faMoneyBillTransfer} />
          <span>Расходы</span>
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
