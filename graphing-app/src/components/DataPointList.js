import React from 'react';
import DataPointItem from './DataPointItem';
import { dataPoints } from '../services/dataService';

const DataPointList = ({ onDrop }) => {
  const handleDragStart = (event, point) => {
    event.dataTransfer.setData('point', JSON.stringify(point));
  };

  const chunkSize = 8;
  const columns = [];

  for (let i = 0; i < dataPoints.length; i += chunkSize) {
    columns.push(dataPoints.slice(i, i + chunkSize));
  }

  return (
    <div className="data-point-list">
      <h2>Data Points</h2>
      <div className="data-columns">
        {columns.map((column, columnIndex) => (
          <div className="data-column" key={columnIndex}>
            {column.map((point) => (
              <DataPointItem
                key={point.x}
                point={point}
                onDragStart={(event) => handleDragStart(event, point)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataPointList;
