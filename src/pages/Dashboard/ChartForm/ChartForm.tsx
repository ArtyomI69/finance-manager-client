import { FC, ChangeEvent } from "react";

import styles from "./ChartForm.module.css";
import { TransactionsVisualization } from "../../../models/TransactionsVisualization";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { dashboardSlice } from "../../../store/reducers/DashboardSlice";
import SelectorBox from "../../../components/SelectorBox/SelectorBox";
import MonthPicker from "../MonthPicker/MonthPicker";

interface IBoxOption {
  text: string;
  value: TransactionsVisualization;
}

const selectorBoxOptions: IBoxOption[] = [
  { text: "Личные транзакции", value: "histogram--person" },
  { text: "Групповые транзакции", value: "histogram--group" },
  { text: "Личные доходы", value: "piechart--person--income" },
  { text: "Личные расходы", value: "piechart--person--expenses" },
  { text: "Групповые доходы", value: "piechart--group--income" },
  { text: "Групповые расходы", value: "piechart--group--expenses" },
  { text: "Личные транзакции (таблица)", value: "table--person" },
  { text: "Групповые транзакции (таблица)", value: "table--group" },
];

const ChartForm: FC = () => {
  const { transactionsVisualization } = useAppSelector((state) => state.dashboardReducer);
  const dispatch = useAppDispatch();

  const selectorBoxChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      dashboardSlice.actions.changeChartType({
        transactionsVisualization: e.target.value as TransactionsVisualization,
      })
    );
  };

  return (
    <form className={styles["chart-form"]}>
      <SelectorBox
        label="Тип диограммы"
        name="transactions-visualization-type"
        options={selectorBoxOptions}
        selectedValue={transactionsVisualization}
        onChange={selectorBoxChangeHandler}
      />
      <MonthPicker />
    </form>
  );
};

export default ChartForm;
