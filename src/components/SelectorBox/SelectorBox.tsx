import { ChangeEvent, FC } from "react";

import styles from "./SelectorBox.module.css";

interface Option {
  text: string;
  value: string;
}

interface SelectorBoxProps {
  options: Option[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectorBox: FC<SelectorBoxProps> = ({ options, onChange }) => {
  return (
    <div className={styles["selector-box"]}>
      <label htmlFor="chart-type">Тип диаграммы</label>
      <select id="chart-type" onChange={onChange}>
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
