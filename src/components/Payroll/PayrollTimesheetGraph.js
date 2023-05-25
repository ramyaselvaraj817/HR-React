import React from "react";
import { Bar } from "react-chartjs-2";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chartContainer: {
    width: "100%",
    height: "300px",
    marginTop: theme.spacing(2),
  },
}));

const PayrollTimesheetGraph = ({ candidates }) => {
  const classes = useStyles();

  // Prepare data for the chart
  const chartData = {
    labels: candidates.map((candidate) => candidate.name),
    datasets: [
      {
        label: "Hours Worked",
        data: candidates.map((candidate) => candidate.hoursWorked),
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue color
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className={classes.chartContainer}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default PayrollTimesheetGraph;
