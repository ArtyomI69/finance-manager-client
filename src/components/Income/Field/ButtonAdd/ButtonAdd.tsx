import { FC } from "react";
import styles from "./ButtonAdd.module.css";
import { FormikProps } from "formik";
import { ISelection } from "../../../../pages/Incomes/FieldSelection/ISelection";
import { ISelectionInput } from "../../../../pages/MoneyTransfers/InputSelection/ISelectionInput";
import { IIncomes } from "../../../../models/IIncomes";
import { ITransfers } from "../../../../models/ITransfers";
interface ButtonAddProps{
  formik: FormikProps<IIncomes>|FormikProps<ITransfers>;
  value:string;
}
const ButtonAdd: FC<ButtonAddProps> = ({formik,value})=>{
  
  return (
      <div className={styles.ButtonAdd}>
         <button className={styles.button}  disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}>
          {value}
        </button>
      </div>
  ); 
};
export default ButtonAdd