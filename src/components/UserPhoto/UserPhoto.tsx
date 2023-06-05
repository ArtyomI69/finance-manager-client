import { FC } from "react";

import styles from "./UserPhoto.module.css";
import manPhoto from "../../assets/man.png";

const UserPhoto: FC = () => {
  return <img className={styles["user-photo"]} src={manPhoto} alt="Аватар пользователя" />;
};

export default UserPhoto;
