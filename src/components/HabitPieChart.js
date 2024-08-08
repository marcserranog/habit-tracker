import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const HabitPieChart = ({ percentage }) => {
  const options = {
    chart: {
      type: "pie",
      backgroundColor: null,
    },
    title: {
      text: null,
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          style: { fontSize: "15px", textOutLine: "none", color: "contrast" },
        },
      },
    },
    series: [
      {
        name: "Habits",
        data: [
          { name: "Completed", y: percentage, color: "#36A2EB" },
          { name: "Incomplete", y: 100 - percentage, color: "#FF6384" },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="w-full lg:w-1/2 p-4">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default HabitPieChart;
