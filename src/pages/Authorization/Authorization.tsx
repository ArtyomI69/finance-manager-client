import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import styles from "./Authorization.module.css";
import AuthorizationForm from "./AuthorizationForm/AuthorizationForm";
import EmailMessage from "./EmailMessage/EmailMessage";

const Authorization: FC = () => {
  return (
    <div className={styles.authorization}>
      <Routes>
        <Route path="/authorization/*" element={<AuthorizationForm />} />
        <Route
          path="/confirmEmail"
          element={
            <EmailMessage title="Благодарим вас за то что выбрали наш финансовый менеджер!" />
          }
        />
        <Route
          path="/resetPasswordEmail"
          element={<EmailMessage title="Потвердите изменение пароля" />}
        />
        <Route path="/*" element={<Navigate to="/authorization" />} />
      </Routes>
    </div>
  );
};

export default Authorization;
