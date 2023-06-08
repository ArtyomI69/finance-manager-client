import { FC, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

import styles from "./MonthPicker.module.css";

const MonthPicker: FC = () => {
  const [monthYear, setMonthYear] = useState(new Date());

  return (
    <div className={styles["month-picker"]}>
      <label htmlFor="month-picker">Месяц</label>
      <DatePicker
        selected={monthYear}
        onChange={(date) => setMonthYear(date ? date : new Date())}
        minDate={new Date("1970")}
        maxDate={new Date()}
        dateFormat="MMMM yyyy"
        showMonthYearPicker
        locale="ru"
      />
    </div>
  );
};

export default MonthPicker;
