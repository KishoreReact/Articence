import React from 'react';

const DataPointItem = ({ point, onDragStart }) => {
  return (
    <div
      className="data-point-item"
      draggable
      onDragStart={(event) => onDragStart(event)}
    >
      ({point.x}, {point.y})
    </div>
  );
};

export default DataPointItem;
