import React from "react";
import '/node_modules/react-vis/dist/style.css';
import './index.css';
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineSeries
} from 'react-vis';

function Chart({ data }) {
  return (
    <div className="chart">
      <XYPlot yDomain={[20, 100]} xType="time" height={300} width= {1000}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} />
      </XYPlot>
    </div>);
}

export default Chart;
