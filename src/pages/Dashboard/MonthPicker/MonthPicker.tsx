import { FC } from "react";

import styles from "./MonthPicker.module.css";

const MonthPicker: FC = () => {
  return (
    <div>
      <label htmlFor="month-picker">Месяц</label>
      <input id="month-picker" type="month" />
    </div>
  );
};

export default MonthPicker;
