import React from 'react';
import { graphTypes } from '../constants/graphTypes';

const GraphTypeSelector = ({ onGraphTypeChange }) => {
  return (
    <div className="graph-type-selector">
      <label>Select Graph Type:</label>
      <select onChange={(e) => onGraphTypeChange(e.target.value)}>
        {Object.values(graphTypes).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GraphTypeSelector;
