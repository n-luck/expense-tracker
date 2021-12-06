import React from "react";
import ChartBar from "../ChartBar/ChartBar";
import "./Chart.styles.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
