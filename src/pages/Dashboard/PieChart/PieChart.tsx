import { FC } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
ChartJS.defaults.font.family = "Rubik, sans-serif, 'FontAwesome'";

const data: ChartData<"pie"> = {
  labels: ["Продукты", "Онлайн покупки", "\uf1b9 Машина"],
  datasets: [
    {
      data: [3, 6, 9],
      backgroundColor: ["#40c057", "red", "aqua"],
    },
  ],
};

const PieChart: FC = () => {
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
                (prev, datapoint) => (prev += datapoint!),
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
