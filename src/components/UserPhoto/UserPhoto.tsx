import { FC } from "react";

import styles from "./UserPhoto.module.css";
import { userAPI } from "../../store/services/UserService";
import { Gender } from "../../models/Gender";
import manPhoto from "../../assets/man.png";
import womanPhoto from "../../assets/woman.png";

interface UserPhotoProps {
  gender?: Gender;
}

const UserPhoto: FC<UserPhotoProps> = ({ gender }) => {
  const { data, isLoading } = userAPI.useFetchMeQuery();

  let photo;
  photo = data!.gender === "M" ? manPhoto : womanPhoto;
  if (gender) {
    photo = gender === "M" ? manPhoto : womanPhoto;
  }

  if (isLoading) return null;

  return <img className={styles["user-photo"]} src={photo} alt="Аватар пользователя" />;
};

export default UserPhoto;
