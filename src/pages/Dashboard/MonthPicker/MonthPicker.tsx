import { FC } from "react";

import styles from "./MonthPicker.module.css";

const date = new Date();
const curYear = date.getFullYear().toString();
let curMonth = date.getMonth().toString();
if (+curMonth < 10) curMonth = "0" + curMonth;

const MonthPicker: FC = () => {
  return (
    <div className={styles["month-picker"]}>
      <label htmlFor="month-picker">Месяц</label>
      <input id="month-picker" min="1970-01" type="month" defaultValue={`${curYear}-${curMonth}`} />
    </div>
  );
};

export default MonthPicker;
