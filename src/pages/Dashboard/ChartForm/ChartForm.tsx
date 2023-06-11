import { FC, ChangeEvent } from "react";

import styles from "./ChartForm.module.css";
import { ChartType } from "../../../models/ChartType";
import { useAppDispatch } from "../../../hooks/redux";
import { dashboardSlice } from "../../../store/reducers/DashboardSlice";
import SelectorBox from "../../../components/SelectorBox/SelectorBox";
import MonthPicker from "../MonthPicker/MonthPicker";

interface IBoxOption {
  text: string;
  value: ChartType;
}

const selectorBoxOptions: IBoxOption[] = [
  { text: "Гистограмма", value: "histogram" },
  { text: "Круговая диаграмма", value: "piechart" },
];

const ChartForm: FC = () => {
  const dispatch = useAppDispatch();

  const selectorBoxChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(dashboardSlice.actions.changeChartType({ chartType: e.target.value as ChartType }));
  };

  return (
    <form className={styles["chart-form"]}>
      <SelectorBox
        title="Тип диограммы"
        options={selectorBoxOptions}
        onChange={selectorBoxChangeHandler}
      />
      <MonthPicker />
    </form>
  );
};

export default ChartForm;
