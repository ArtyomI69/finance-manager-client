import { FC, useState } from "react";

import styles from "./Header.module.css";
import HeaderUserInfo from "./HeaderUserInfo/HeaderUserInfo";
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import CloseNavbarButton from "./CloseNavbarButton/CloseNavbarButton";

const Header: FC = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const openMobileNavBar = () => {
    setIsHeaderOpen(true);
  };

  const closeMobileNavBar = () => {
    setIsHeaderOpen(false);
  };

  const className = isHeaderOpen
    ? [styles.header, styles["header--open"]].join(" ")
    : styles.header;

  return (
    <header className={className}>
      <HeaderUserInfo />
      <Navbar closeMobileNavBar={closeMobileNavBar} />
      <MobileNavbar openMobileNavBar={openMobileNavBar} isHeaderOpen={isHeaderOpen} />
      <CloseNavbarButton closeMobileNavBar={closeMobileNavBar} isHeaderOpen={isHeaderOpen} />
    </header>
  );
};

export default Header;
