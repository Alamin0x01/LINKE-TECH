import React, { useState } from "react";
import Chart from "react-apexcharts";

const Statistics = () => {
  const [state, setState] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Assignment 1",
          "Assignment 2",
          "Assignment 3",
          "Assignment 4",
          "Assignment 5",
          "Assignment 6",
          "Assignment 7",
          "Assignment 8",
        ],
      },
    },
    series: [
      {
        name: "Mark",
        data: [57, 58, 58, 52, 55, 30, 60, 50],
      },
    ],
  });
  return (
    <div className="my-container">
      <h2 className="text-center text-cyan-400  font-bold text-3xl mb-5">
        Assignment Marks Statistics
      </h2>
      <div>
        <div>
          <Chart
            options={state.options}
            series={state.series}
            type="radar"
            width="1000"
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
