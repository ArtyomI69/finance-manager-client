import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./MobileNavbar.module.css";

interface MobileNavbarProps {
  toggleMobileNavbar: () => void;
  isHeaderOpen: boolean;
}

const MobileNavbar: FC<MobileNavbarProps> = ({ isHeaderOpen, toggleMobileNavbar }) => {
  const className = isHeaderOpen
    ? [styles["mobile-navbar"], styles["mobile-navbar--closed"]].join(" ")
    : styles["mobile-navbar"];

  return (
    <div className={className}>
      <button onClick={toggleMobileNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default MobileNavbar;
