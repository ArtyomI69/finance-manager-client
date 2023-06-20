import { FC, ChangeEvent } from "react";

import styles from "./ChartForm.module.css";
import { TransactionsVisualizationType } from "../../../models/TransactionsVisualizationType";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { dashboardSlice } from "../../../store/reducers/DashboardSlice";
import SelectorBox from "../../../components/SelectorBox/SelectorBox";
import MonthPicker from "../MonthPicker/MonthPicker";

interface IBoxOption {
  text: string;
  value: TransactionsVisualizationType;
}

const selectorBoxOptions: IBoxOption[] = [
  { text: "Гистограмма", value: "histogram--person" },
  { text: "Круговая диаграмма", value: "piechart--person--income" },
  { text: "Таблица транзакций", value: "table--person" },
];

const ChartForm: FC = () => {
  const { transactionsDataType } = useAppSelector((state) => state.dashboardReducer);
  const dispatch = useAppDispatch();

  const selectorBoxChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      dashboardSlice.actions.changeChartType({
        chartType: e.target.value as TransactionsVisualizationType,
      })
    );
  };

  return (
    <form className={styles["chart-form"]}>
      <SelectorBox
        label="Тип диограммы"
        name="transactions-visualization-type"
        options={selectorBoxOptions}
        selectedValue={transactionsDataType}
        onChange={selectorBoxChangeHandler}
      />
      <MonthPicker />
    </form>
  );
};

export default ChartForm;
