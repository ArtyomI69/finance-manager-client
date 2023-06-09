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

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data: ChartData<"bar"> = {
  labels: ["Mon", "Tue", "Wed"],
  datasets: [
    {
      label: "Доходы",
      data: [3, 6, 9],
      backgroundColor: "#40c057",
      borderColor: "black",
      borderWidth: 1,
    },
  ],
};

const BarChart: FC = () => {
  return (
    <Bar
      data={data}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: "#000", font: { size: 18 } },
          },
        },
      }}
    />
  );
};

export default BarChart;
