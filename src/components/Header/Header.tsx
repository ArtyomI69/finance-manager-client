import { FC } from "react";

import styles from "./Header.module.css";
import HeaderUserInfo from "./HeaderUserInfo/HeaderUserInfo";
import Navbar from "../Navbar/Navbar";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <HeaderUserInfo />
      <Navbar />
    </header>
  );
};

export default Header;
