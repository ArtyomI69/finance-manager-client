import { FC } from "react";

import styles from "./SelectorBox.module.css";

interface Option {
  text: string;
  value: string;
}

interface SelectorBoxProps {
  options: Option[];
}

const SelectorBox: FC<SelectorBoxProps> = ({ options }) => {
  return (
    <div className={styles["selector-box"]}>
      <label htmlFor="chart-type">Тип диаграммы</label>
      <select id="chart-type">
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
