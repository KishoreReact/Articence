// AxisSelector.js
import React from 'react';

const AxisSelector = ({ axis, options, onSelect }) => {
  const handleSelect = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div className="axis-selector">
      <label htmlFor={`${axis}-axis`}>{`${axis.toUpperCase()} Axis:`}</label>
      <select id={`${axis}-axis`} onChange={handleSelect}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AxisSelector;
