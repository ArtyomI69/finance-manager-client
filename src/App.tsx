import { FC } from "react";

import styles from "./App.module.css";
import { useAppSelector } from "./hooks/redux";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
import FullScreenLoader from "./components/FullScreenLoader/FullScreenLoader";

const App: FC = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);

  return (
    <div className={styles.app}>
      {/* <FullScreenLoader /> */}
      {!isAuth && <LoginSignUp />}
      {isAuth && <Header />}
      {isAuth && <Main />}
    </div>
  );
};

export default App;
