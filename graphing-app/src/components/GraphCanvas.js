// src/components/GraphCanvas.js
import React, { useState } from 'react';
import { Line, Scatter, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { graphTypes } from '../constants/graphTypes';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const GraphCanvas = ({ dataPoints, graphType, onDrop }) => {
  const [chartData, setChartData] = useState({ datasets: [] });

  React.useEffect(() => {
    const data = {
      labels: dataPoints.map((point) => point.x),
      datasets: [
        {
          label: 'Data Points',
          data: dataPoints,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    setChartData(data);
  }, [dataPoints]);

  const handleDrop = (event) => {
    event.preventDefault();
    const point = JSON.parse(event.dataTransfer.getData('point'));
    onDrop(point);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const getChartComponent = () => {
    switch (graphType) {
      case graphTypes.LINE:
        return <Line data={chartData} />;
      case graphTypes.SCATTER:
        return <Scatter data={chartData} />;
      case graphTypes.BAR:
        return <Bar data={chartData} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="graph-canvas"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    ><h2>Dynamic Data Graph</h2>
      {getChartComponent()}
    </div>
  );
};

export default GraphCanvas;
