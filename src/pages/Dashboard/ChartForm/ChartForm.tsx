import { FC } from "react";
import SelectorBox from "../../../components/SelectorBox/SelectorBox";
import MonthPicker from "../MonthPicker/MonthPicker";

import styles from "./ChartForm.module.css";

const ChartForm: FC = () => {
  return (
    <form className={styles["chart-form"]}>
      <SelectorBox />
      <MonthPicker />
    </form>
  );
};

export default ChartForm;
