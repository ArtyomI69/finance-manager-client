import { FC, useState } from "react";
import DatePicker, { registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);
interface MonateProps{
  monthYear:Date;
  setMonthYear:React.Dispatch<React.SetStateAction<Date>>;
}
import styles from "./FieldMonate.module.css";
const FieldMonate: FC<MonateProps>= ({monthYear,setMonthYear}) => {
   
  return (
    <div className={styles.fieldMonate}>
      <DatePicker
        selected={monthYear}
        onChange={(date) => setMonthYear(date ? date : new Date())}
        minDate={new Date("1970")}
        maxDate={new Date()}
        dateFormat="dd MMMM yyyy"
        locale="ru"
      />
    </div>
  );
};
export default FieldMonate;
