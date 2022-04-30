import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Mar 22", "Mar 23", "Mar 24", "Mar 25", "Mar 26", "Mar 27"],
      datasets: [
        {
          label: "Inflow",
          data: [10000, 18000, 12000, 59000, 54000, 20000, 30000, 59000],
          fill: true,
          borderColor: "#059669",
          backgroundColor: "#059669",
          tension: 0.3,
          pointRadius: 0
        },
        {
          label: "Outflow",
          data: [2000, 8000, 5000, 20000, 8000, 11000, 6000, 50000],
          fill: true,
          borderColor: "#6672FB",
          backgroundColor: "#6672FB",
          tension: 0.3,
          pointRadius: 0
        },
      ],
    });

    setChartOptions({
      scales: {
        y: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    });
  }, []);

  return <Line data={chartData} options={chartOptions}/>;
};

export default LineChart;
