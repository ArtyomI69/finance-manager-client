import { FC } from "react";

import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";

const App: FC = () => {
  return (
    <div className={styles.app}>
      {/* <LoginSignUp /> */}
      <Header />
      <Main />
    </div>
  );
};

export default App;
