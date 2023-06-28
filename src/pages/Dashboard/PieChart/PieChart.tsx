import { FC } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, Colors } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";

import { IGroupedTransaction } from "../../../models/IGroupedTransaction";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels, Colors);
ChartJS.defaults.font.family = "Rubik, sans-serif, 'FontAwesome'";

interface PieChartProps {
  transactions: IGroupedTransaction[];
}

const PieChart: FC<PieChartProps> = ({ transactions }) => {
  const data: ChartData<"pie"> = {
    // labels: ["\uf07a Продукты", "\uf0ac Онлайн покупки", "\uf1b9 Автосервис"],
    labels: transactions.length > 0 ? transactions.map(({ name }) => name) : [],
    datasets: [
      {
        data: transactions.length > 0 ? transactions.map(({ amount }) => amount) : [],
      },
    ],
  };

  return (
    <Pie
      data={data}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            labels: { color: "#000", font: { size: 20 } },
          },
          datalabels: {
            formatter: (value, ctx) => {
              const datapoints = ctx.chart.data.datasets[0].data;
              const total = datapoints.reduce(
                (prev, datapoint) => ((prev as number) += datapoint as number),
                0
              ) as number;
              const percentage = (value / total) * 100;
              return percentage.toFixed(2) + "%";
            },
            color: "#fff",
          },
        },
      }}
    />
  );
};

export default PieChart;
