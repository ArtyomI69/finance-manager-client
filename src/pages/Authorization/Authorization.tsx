import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import styles from "./Authorization.module.css";
import LoginSignUp from "./LoginSignUp/LoginSignUp";
import ConfirmEmail from "./ConfirmEmail/ConfirmEmail";

const Authorization: FC = () => {
  return (
    <div className={styles.authorization}>
      <Routes>
        <Route path="/authorization/*" element={<LoginSignUp />} />
        <Route path="/confirmEmail" element={<ConfirmEmail />} />
        <Route path="/*" element={<Navigate to="/authorization" />} />
      </Routes>
    </div>
  );
};

export default Authorization;
