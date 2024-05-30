import React from "react";
import "./chart.css";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const ProChart = ({ props }) => {
  const data = {
    datasets: [
      {
        data: [props.upcoming, props.ongoing, props.completed],
        backgroundColor: ["#FFCB49", "#7464FF", "#4FD2B5"],
      },
    ],
  };

  const total = props.upcoming + props.completed + props.ongoing;

  const options = {};

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        `Total \n ${total}`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  return (
    <div className="chart">
      <div>
        <span className="chart-title">{props.title}</span>
      </div>
      <div className="dou-chart">
      <Doughnut data={data} options={options} plugins={[textCenter]} />
      </div>
      <div className="bars">
        <div className="bar golden-bg">
          <p>Upcoming</p>
          <p>{props.upcoming}</p>
        </div>
        <div className="bar violet-bg">
          <p>Ongoing</p>
          <p>{props.ongoing}</p>
        </div>
        <div className="bar green-bg">
          <p>Completed</p>
          <p>{props.completed}</p>
        </div>
      </div>
    </div>
  );
};

export default ProChart;
