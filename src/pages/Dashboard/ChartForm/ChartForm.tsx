import { FC, ChangeEvent } from "react";

import styles from "./ChartForm.module.css";
import { TransactionsDataType } from "../../../models/ChartType";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { dashboardSlice } from "../../../store/reducers/DashboardSlice";
import SelectorBox from "../../../components/SelectorBox/SelectorBox";
import MonthPicker from "../MonthPicker/MonthPicker";

interface IBoxOption {
  text: string;
  value: TransactionsDataType;
}

const selectorBoxOptions: IBoxOption[] = [
  { text: "Гистограмма", value: "histogram" },
  { text: "Круговая диаграмма", value: "piechart" },
  { text: "Таблица транзакций", value: "all-transactions" },
];

const ChartForm: FC = () => {
  const { transactionsDataType } = useAppSelector((state) => state.dashboardReducer);
  const dispatch = useAppDispatch();

  const selectorBoxChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      dashboardSlice.actions.changeChartType({ chartType: e.target.value as TransactionsDataType })
    );
  };

  return (
    <form className={styles["chart-form"]}>
      <SelectorBox
        label="Тип диограммы"
        name="transactions-data-type"
        options={selectorBoxOptions}
        selectedValue={transactionsDataType}
        onChange={selectorBoxChangeHandler}
      />
      <MonthPicker />
    </form>
  );
};

export default ChartForm;
