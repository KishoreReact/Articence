import React, { useState } from 'react';
import DataPointList from './components/DataPointList';
import GraphCanvas from './components/GraphCanvas';
import GraphTypeSelector from './components/GraphTypeSelector';
import { graphTypes } from './constants/graphTypes';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const App = () => {
  const [dataPoints, setDataPoints] = useState([]);
  const [graphType, setGraphType] = useState(graphTypes.SCATTER);
  const [xAxis, setXAxis] = useState('x');
  const [yAxis, setYAxis] = useState('y');
  const [xAxisLabel, setXAxisLabel] = useState('Orange');
  const [yAxisLabel, setYAxisLabel] = useState('People1');

  const handleDataPointDrop = (point) => {
    setDataPoints((prevPoints) => [...prevPoints, point]);
  };

  const handleGraphTypeChange = (type) => {
    setGraphType(type);
  };

  const handleXAxisChange = (event) => {
    setXAxis(event.target.value);
    const selectedOption = event.target.options[event.target.selectedIndex];
     const selectedLabel = selectedOption.text;
     setXAxisLabel(selectedLabel)
  };

  const handleYAxisChange = (event) => {
    setYAxis(event.target.value);
    const selectedOption = event.target.options[event.target.selectedIndex];
     const selectedLabel = selectedOption.text;
     setYAxisLabel(selectedLabel)
  };

  return (
    <ErrorBoundary>
      <div className="app">
        <h1>Graphing Application</h1>
        <GraphTypeSelector onGraphTypeChange={handleGraphTypeChange} />
        <div className="axis-selector">
          <label>X-Axis: </label>
          <select value={xAxis} onChange={handleXAxisChange}>
            <option value="x">Orange</option>
            <option value="y">Apple</option>
          </select>
          <label>Y-Axis: </label>
          <select value={yAxis} onChange={handleYAxisChange}>
            <option value="y">People1</option>
            <option value="x">People2</option>
          </select>
        </div>
        <div className="container">
          <DataPointList onDrop={handleDataPointDrop} />
          <GraphCanvas 
            dataPoints={dataPoints} 
            graphType={graphType} 
            xAxis={xAxis} 
            yAxis={yAxis}
            xAxisLabel={xAxisLabel} 
            yAxisLabel={yAxisLabel}
            onDrop={handleDataPointDrop} 
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
