import React from "react";
import '/node_modules/react-vis/dist/style.css';
import './index.css';
import {
  XYPlot,
  makeWidthFlexible,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  AreaSeries
} from 'react-vis';

function Chart({ data }) {
  const FlexibleWidthXYPlot = makeWidthFlexible(XYPlot);
  return (
    <div className="chart">
      <FlexibleWidthXYPlot stroke="#2fb5ff" yDomain={[20, 100]} xType="time" height={300} >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <AreaSeries data={data} color="#2fb5ff" />
      </FlexibleWidthXYPlot>
    </div>);
}

export default Chart;
