import { FC } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";

import { ITransaction } from "../../../models/ITransaction";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
ChartJS.defaults.font.family = "Rubik, sans-serif, 'FontAwesome'";

interface PieChartProps {
  transactions: ITransaction[];
}

const PieChart: FC<PieChartProps> = ({ transactions }) => {
  const data: ChartData<"pie"> = {
    labels: ["\uf07a Продукты", "\uf0ac Онлайн покупки", "\uf1b9 Автосервис"],
    datasets: [
      {
        data: [3, 6, 9],
        backgroundColor: ["#40c057", "red", "aqua"],
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
