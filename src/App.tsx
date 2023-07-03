import { FC, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./App.module.css";
import { useAppSelector } from "./hooks/redux";
import { authAPI } from "./store/services/AuthService";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Authorization from "./pages/Authorization/Authorization";
import FullScreenLoader from "./components/FullScreenLoader/FullScreenLoader";

const App: FC = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const [refreshTokens, { isLoading }] = authAPI.useRefreshTokensMutation();

  useEffect(() => {
    refreshTokens();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ToastContainer
        bodyStyle={{ fontSize: "1.6rem" }}
        position="top-center"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={true}
        theme="colored"
      />
      {!isAuth && !isLoading && <Authorization />}
      {isLoading && <FullScreenLoader />}
      {isAuth && !isLoading && (
        <div className={styles.app}>
          <Header />
          <Main />
        </div>
      )}
    </>
  );
};

export default App;
