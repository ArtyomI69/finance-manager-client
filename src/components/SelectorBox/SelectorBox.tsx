import { ChangeEvent, FC } from "react";

import styles from "./SelectorBox.module.css";

interface Option {
  text: string;
  value: string;
}

interface SelectorBoxProps {
  name?: string;
  label: string;
  options: Option[];
  selectedValue?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  CategoryBoxRef?:React.MutableRefObject<HTMLSelectElement>;
}

const SelectorBox: FC<SelectorBoxProps> = ({ label, name, options, selectedValue, onChange,CategoryBoxRef }) => {
  return (
    <div className={styles["selector-box"]}>
      <label htmlFor={name}>{label}</label>
      <select value={selectedValue} id={name} name={name} onChange={onChange} ref={CategoryBoxRef}>
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
