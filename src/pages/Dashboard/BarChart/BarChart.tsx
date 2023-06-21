import { FC } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { ITransaction } from "../../../models/ITransaction";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface BarChartProps {
  transactions: ITransaction[];
}

const BarChart: FC<BarChartProps> = ({ transactions }) => {
  const uniqueDates = Array.from(new Set(transactions.map(({ created_at }) => created_at))).sort();
  const labels = uniqueDates.map((created_at) => new Date(created_at).toLocaleDateString("ru-RU"));

  const incomes: number[] = Array.from(Array(labels.length)).map(() => 0);
  const expenses: number[] = Array.from(Array(labels.length)).map(() => 0);
  for (let i = 0; i < labels.length; i++) {
    for (let j = 0; j < transactions.length; j++) {
      const date = new Date(transactions[j].created_at).toLocaleDateString("ru-RU");
      if (labels[i] === date) {
        if (transactions[j].amount > 0) incomes[i] += transactions[j].amount;
        else expenses[i] += Math.abs(transactions[j].amount);
      }
    }
  }

  const data: ChartData<"bar"> = {
    labels: labels,
    datasets: [
      {
        label: "Доходы",
        // data: [1, 3],
        data: incomes,
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Расходы",
        // data: [2, 4],
        data: expenses,
        backgroundColor: "red",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Bar
      data={data}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: "#000", font: { size: 18 } },
          },
          datalabels: {
            color: "#fff",
          },
        },
      }}
    />
  );
};

export default BarChart;
