import { FC } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../TextError/TextError";
import styles from "./Field.module.css";
interface FieldInputProps {
  name: string;
  type: string;
  placeholder?:string;
}
const FieldInput: FC<FieldInputProps> = (({ name, type,placeholder }) => {

  return (
    <div className={styles.title}>
      <Field type={type} id={name} name={name} placeholder={placeholder} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );

});
export default FieldInput