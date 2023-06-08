import { FC } from "react";

import styles from "./SelectorBox.module.css";

const SelectorBox: FC = () => {
  return (
    <div>
      <label htmlFor="chart-type">Тип диаграммы</label>
      <select
        id="chart-type"
        onChange={(e: any) => console.log(e.target.value)}
        className={styles["selector-box"]}
      >
        <option value="Гистограмма">Гистограмма</option>
        <option value="Круговая диаграмма">Круговая диаграмма</option>
      </select>
    </div>
  );
};

export default SelectorBox;
