import { FC } from "react";

import styles from "./UserPhoto.module.css";
import { Gender } from "../../models/Gender";
import manPhoto from "../../assets/man.png";
import womanPhoto from "../../assets/woman.png";

interface UserPhotoProps {
  gender?: Gender;
}

const UserPhoto: FC<UserPhotoProps> = ({ gender = "man" }) => {
  let photo;
  if (gender) {
    photo = gender === "man" ? manPhoto : womanPhoto;
  }

  return <img className={styles["user-photo"]} src={photo} alt="Аватар пользователя" />;
};

export default UserPhoto;
