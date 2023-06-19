import { FC} from "react";
import styles from "./FieldSelection.module.css";
import Field from "../../../components/Income/Field/Field";
import FieldMonate from "../../../components/Income/Field/FieldMonate/FieldMonate";
import SelectorBox from "../../../components/SelectorBox/SelectorBox";
interface SelectionProps{
  monthYear:Date;
  setMonthYear:React.Dispatch<React.SetStateAction<Date>>;
  sumBoxRefs: React.MutableRefObject<HTMLInputElement>;
  CommentBoxRefs: React.MutableRefObject<HTMLTextAreaElement>;
  CategoryBoxRef: React.MutableRefObject<HTMLSelectElement>;
}
const selectorBoxOptions = [
  { text: "Биткоин", value: "Биткоин" },
  { text: "Работа", value: "Работа" },
  { text: "Подарок", value: "Подарок" },
  { text: "Подработка", value: "Подработка" },
];
const addNewPost =()=>{
   
}
const FieldSelection: FC<SelectionProps> = ({sumBoxRefs,CommentBoxRefs,CategoryBoxRef,monthYear,setMonthYear})=>{
  return (

    <div className={styles.fieldselection}>
    <Field value="sum" reff={sumBoxRefs}/>
   <FieldMonate monthYear={monthYear} setMonthYear={setMonthYear} />
    <form className={styles["chart-form"]}>
      <SelectorBox options={selectorBoxOptions} label="Категория" CategoryBoxRef={CategoryBoxRef}/>
    </form>
    <textarea placeholder="Введите описание"  ref={CommentBoxRefs}></textarea>
 </div>
  ); 
};
export default FieldSelection