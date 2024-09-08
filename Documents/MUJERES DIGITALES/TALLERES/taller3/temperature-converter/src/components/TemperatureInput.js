import React from 'react';

function TemperatureInput({ temperature, onTemperatureChange }) {
  const handleChange = (event) => {
    onTemperatureChange(event.target.value);
  };

  return (
    <div>
      <label>
        Temperatura en Celsius:
        <input type="number" value={temperature} onChange={handleChange} />
      </label>
    </div>
  );
}

export default TemperatureInput;
