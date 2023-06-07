import { FC } from "react";

import styles from "./Profile.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";

const Profile: FC = () => {
  return (
    <div className={styles.profile}>
      <PageTitle />
    </div>
  );
};

export default Profile;
