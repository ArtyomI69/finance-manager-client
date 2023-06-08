import { FC } from "react";
import SelectorBox from "../../../components/SelectorBox/SelectorBox";
import MonthPicker from "../MonthPicker/MonthPicker";

import styles from "./ChartForm.module.css";

const selectorBoxOptions = [
  { text: "Гистограмма", value: "Гистограмма" },
  { text: "Круговая диаграмма", value: "Круговая диаграмма" },
];

const ChartForm: FC = () => {
  return (
    <form className={styles["chart-form"]}>
      <SelectorBox options={selectorBoxOptions} />
      <MonthPicker />
    </form>
  );
};

export default ChartForm;
