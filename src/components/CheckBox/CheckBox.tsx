import { FC, ChangeEvent } from "react";

import styles from "./CheckBox.module.css";

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: FC<CheckBoxProps> = ({ label, checked, onChange }) => {
  return (
    <div className={styles.checkbox}>
      <label htmlFor={label}>{label}</label>
      <input onChange={onChange} type="checkbox" checked={checked} name={label} id={label} />
    </div>
  );
};

export default CheckBox;
