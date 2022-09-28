import React from "react";
import { Line } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { useEffect } from "react";

const Chart = ({ chartData, setChartData, chartOptions, setChartOptions }) => {
  var xValues = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [barChartData, setBarChartData] = useState({
    labels: xValues,
    datasets: [
      {
        data: [620, 800, 750, 620, 700, 700, 600, 400, 500, 300, 200, 900],
        borderColor: "rgb(84,68,172)",
        fill: false,
      },
      {
        data: [420, 500, 250, 0, 120, 700, 650, 800, 780, 350, 250, 1200],
        borderColor: "rgba(0,135,90,255)",
        fill: false,
      },
    ],
  });
  const [barChartOptions, setBarChartOptions] = useState({
    plugins: {
      legend: {
        display: false,
      },
    },
  });
  return (
    <div className='dashboard-analytics-container flex-column-center gap-20'>
      <div className='analytics-text'>Sales Figures</div>
      <div className='dashboard-graph'>
        <Line data={barChartData} options={barChartOptions} />
      </div>
    </div>
  );
};

export default Chart;
