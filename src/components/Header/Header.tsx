import { FC, useState } from "react";

import styles from "./Header.module.css";
import HeaderUserInfo from "./HeaderUserInfo/HeaderUserInfo";
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import CloseNavbarButton from "./CloseNavbarButton/CloseNavbarButton";

const Header: FC = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const toggleMobileNavbar = () => {
    setIsHeaderOpen((prevIsHeaderOpen) => !prevIsHeaderOpen);
  };

  const className = isHeaderOpen
    ? [styles.header, styles["header--open"]].join(" ")
    : styles.header;

  return (
    <header className={className}>
      <HeaderUserInfo />
      <Navbar />
      <MobileNavbar toggleMobileNavbar={toggleMobileNavbar} isHeaderOpen={isHeaderOpen} />
      <CloseNavbarButton toggleMobileNavbar={toggleMobileNavbar} isHeaderOpen={isHeaderOpen} />
    </header>
  );
};

export default Header;
