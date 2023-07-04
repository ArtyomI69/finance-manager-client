import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import styles from "./AuthorizationForm.module.css";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ResetPassword from "./ResetPassword/ResetPassword";

const AuthorizationForm: FC = () => {
  return (
    <div className={styles["login-sign-up"]}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="reset" element={<ResetPassword />} />
        <Route path="/*" element={<Navigate to={"login"} />} />
      </Routes>
    </div>
  );
};

export default AuthorizationForm;
