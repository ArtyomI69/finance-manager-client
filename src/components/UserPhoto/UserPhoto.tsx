import { FC } from "react";

import styles from "./UserPhoto.module.css";
import { Sex } from "../../models/Sex";
import manPhoto from "../../assets/man.png";
import womanPhoto from "../../assets/woman.png";

interface UserPhotoProps {
  sex?: Sex;
}

const UserPhoto: FC<UserPhotoProps> = ({ sex = "man" }) => {
  let photo;
  if (sex) {
    photo = sex === "man" ? manPhoto : womanPhoto;
  }

  return <img className={styles["user-photo"]} src={photo} alt="Аватар пользователя" />;
};

export default UserPhoto;
