import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import styles from "./LoginSignUp.module.css";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

const LoginSignUp: FC = () => {
  return (
    <div className={styles["login-sign-up"]}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/*" element={<Navigate to={"login"} />} />
      </Routes>
    </div>
  );
};

export default LoginSignUp;
