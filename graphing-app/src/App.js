import React, { useState } from 'react';
import DataPointList from './components/DataPointList';
import GraphCanvas from './components/GraphCanvas';
import GraphTypeSelector from './components/GraphTypeSelector';
import { graphTypes } from './constants/graphTypes';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


const App = () => {
  const [dataPoints, setDataPoints] = useState([]);
  const [graphType, setGraphType] = useState(graphTypes.SCATTER);

  const handleDataPointDrop = (point) => {
    setDataPoints((prevPoints) => [...prevPoints, point]);
  };

  const handleGraphTypeChange = (type) => {
    setGraphType(type);
  };

  return (
    <ErrorBoundary>
    <div className="app">
      <h1>Graphing Application</h1>
      <GraphTypeSelector onGraphTypeChange={handleGraphTypeChange} />
      <div className="container">
        <DataPointList onDrop={handleDataPointDrop} />
        <GraphCanvas dataPoints={dataPoints} graphType={graphType} onDrop={handleDataPointDrop} />
      </div>
    </div>
    </ErrorBoundary>
  );
};

export default App;
