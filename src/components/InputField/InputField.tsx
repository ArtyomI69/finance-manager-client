import { FC } from "react";
import { Field, ErrorMessage } from "formik";

import TextError from "../../pages/LoginSignUp/TextError/TextError";

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
}

const InputField: FC<InputFieldProps> = ({ label, name, type }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field type={type} id={name} name={name} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default InputField;
