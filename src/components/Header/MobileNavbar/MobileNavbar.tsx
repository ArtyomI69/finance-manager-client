import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./MobileNavbar.module.css";

interface MobileNavbarProps {
  openMobileNavBar: () => void;
  isHeaderOpen: boolean;
}

const MobileNavbar: FC<MobileNavbarProps> = ({ isHeaderOpen, openMobileNavBar }) => {
  const className = isHeaderOpen
    ? [styles["mobile-navbar"], styles["mobile-navbar--closed"]].join(" ")
    : styles["mobile-navbar"];

  return (
    <div className={className}>
      <button onClick={openMobileNavBar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default MobileNavbar;
