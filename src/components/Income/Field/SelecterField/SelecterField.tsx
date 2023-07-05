import { FC } from "react";
import { Field } from "formik";
import styles from "./SelecterField.module.css"
import { ICategories } from "../../../../models/ICategories";
import { FormikProps } from "formik";
import { IIncomes } from "../../../../models/IIncomes";

interface SelecterFieldProps {
  name: string;
  options: ICategories[];
  formik:FormikProps<IIncomes>;
}

const SelecterField: FC<SelecterFieldProps> = ({ name, options ,formik}) => {
  return (
    <div className={styles.SelecterField}>
    <Field as="select" name={name} id={name} className={styles.Field} onChange={formik.handleChange}>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </Field>
  </div>
  );
};

export default SelecterField;
