import { FC } from "react";

import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
