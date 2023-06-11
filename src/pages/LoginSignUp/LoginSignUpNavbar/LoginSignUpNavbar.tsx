import { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./LoginSignUpNavbar.module.css";

const LoginSignUpNavbar: FC = () => {
  return (
    <ul className={styles["login-sign-up-navbar"]}>
      <li>
        <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>
          Логин
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup" className={({ isActive }) => (isActive ? styles.active : "")}>
          Регистрация
        </NavLink>
      </li>
    </ul>
  );
};

export default LoginSignUpNavbar;
