import { FC, useEffect } from "react";

import styles from "./App.module.css";
import { useAppSelector } from "./hooks/redux";
import { authAPI } from "./store/services/AuthService";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
import FullScreenLoader from "./components/FullScreenLoader/FullScreenLoader";

const App: FC = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const [refreshTokens, { isLoading }] = authAPI.useRefreshTokensMutation();

  useEffect(() => {
    refreshTokens();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.app}>
      {isLoading && <FullScreenLoader />}
      {!isAuth && <LoginSignUp />}
      {isAuth && <Header />}
      {isAuth && <Main />}
      {/* <Header /> */}
      {/* <Main /> */}
    </div>
  );
};

export default App;
