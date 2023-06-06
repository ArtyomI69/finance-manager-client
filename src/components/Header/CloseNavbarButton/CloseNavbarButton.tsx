import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import styles from "./CloseNavbarButton.module.css";

interface CloseNavbarButtonProps {
  isHeaderOpen: boolean;
  toggleMobileNavbar: () => void;
}

const CloseNavbarButton: FC<CloseNavbarButtonProps> = ({ isHeaderOpen, toggleMobileNavbar }) => {
  const className = isHeaderOpen
    ? styles["close-navbar-button"]
    : [styles["close-navbar-button"], styles["close-navbar-button--closed"]].join(" ");

  return (
    <button className={className} onClick={toggleMobileNavbar}>
      <FontAwesomeIcon icon={faX} />
    </button>
  );
};

export default CloseNavbarButton;
