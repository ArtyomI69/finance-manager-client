import { FC } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

import styles from "./MonthPicker.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { dashboardSlice } from "../../../store/reducers/DashboardSlice";

const MonthPicker: FC = () => {
  const { timestamp } = useAppSelector((state) => state.dashboardReducer);
  const dispatch = useAppDispatch();

  const datePickerChangeHandler = (selectedDate: Date) => {
    dispatch(dashboardSlice.actions.changeDate({ timestamp: selectedDate.getTime() }));
  };

  return (
    <div className={styles["month-picker"]}>
      <label htmlFor="month-picker">Месяц</label>
      <DatePicker
        selected={new Date(timestamp)}
        onChange={datePickerChangeHandler}
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
