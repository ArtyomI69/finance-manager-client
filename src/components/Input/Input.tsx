import { FC } from "react";

interface InputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  disabled?: boolean;
}

const Input: FC<InputProps> = ({ label, name, type, value, disabled }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input disabled={disabled} type={type} id={name} name={name} defaultValue={value} />
    </div>
  );
};

export default Input;
