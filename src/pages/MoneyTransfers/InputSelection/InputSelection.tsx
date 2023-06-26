import { FC } from "react";
import styles from "./InputSelection.module.css";
import Field from "../../../components/Income/Field/Field";
import FieldMonate from "../../../components/Income/Field/FieldMonate/FieldMonate";
interface SelectionProps {
  monthYear: Date;
  setMonthYear: React.Dispatch<React.SetStateAction<Date>>;
  ValueRef: React.MutableRefObject<HTMLInputElement>;
  IdClientRef:React.MutableRefObject<HTMLInputElement>;
  addNewPost:() => void;
}
const InputSelection: FC<SelectionProps> = ({
  ValueRef,
  IdClientRef,
  monthYear,
  setMonthYear,
  addNewPost,
}) => {
  return (
    <div className={styles.inputselection}>
      <Field placeholder="Введите ID" reff={ValueRef} />
      <Field placeholder="Введите сумму" reff={IdClientRef} />
      <FieldMonate monthYear={monthYear} setMonthYear={setMonthYear} />
      <button onClick={addNewPost} className={styles.button}>Перевести</button>
    </div>
  );
};
export default InputSelection;
