import { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import styles from "./Main.module.css";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Profile from "../../pages/Profile/Profile";
import Group from "../../pages/Group/Group";
import Incomes from "../../pages/Incomes/Incomes";
import Expenses from "../../pages/Expenses/Expenses";
import PageTitle from "../PageTitle/PageTitle";

const Main: FC = () => {
  return (
    <main className={styles.main}>
      <PageTitle />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/group" element={<Group />} />
        <Route path="/incomes" element={<Incomes />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </main>
  );
};

export default Main;
