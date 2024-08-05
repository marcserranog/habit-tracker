import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement,Tooltip, Legend);

const HabitChart = ({ percentage }) => {
    const data = {
        labels: ['Completed', 'Incomplete'],
        datasets: [
            {
                data: [percentage, 100 - percentage],
                backgroundColor: ['#36A2EB','#FF6384'],
                hoverBackgroundColor: ['#36A2EB','#FF6384'],
            },
        ],
    };
    return(
        <div className="habit-chart">
            <Doughnut data={data} />
        </div>
    )
}

export default HabitChart;