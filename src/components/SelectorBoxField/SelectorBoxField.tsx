import { FC } from "react";
import { Field } from "formik";

interface Option {
  text: string;
  value: string;
}

interface SelectorBoxFieldProps {
  name: string;
  label: string;
  options: Option[];
}

const SelectorBoxField: FC<SelectorBoxFieldProps> = ({ label, name, options }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} id={name}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default SelectorBoxField;
