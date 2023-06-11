import { ChangeEvent, FC } from "react";

import styles from "./SelectorBox.module.css";

interface Option {
  text: string;
  value: string;
}

interface SelectorBoxProps {
  name: string;
  label: string;
  options: Option[];
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectorBox: FC<SelectorBoxProps> = ({ label, name, options, onChange, ...rest }) => {
  return (
    <div className={styles["selector-box"]}>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} onChange={onChange} {...rest}>
        {options.map((option, idx) => (
          <option key={idx.toString()} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorBox;
