import React, { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  // Función para manejar el cambio en Celsius
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value !== '') {
      setFahrenheit(((value * 9) / 5 + 32).toFixed(2)); // Conversión correcta
    } else {
      setFahrenheit(''); // Limpiar el campo si no hay valor
    }
  };

  // Función para manejar el cambio en Fahrenheit
  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value !== '') {
      setCelsius(((value - 32) * 5 / 9).toFixed(2)); // Conversión correcta
    } else {
      setCelsius(''); // Limpiar el campo si no hay valor
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Calculadora de temperatura</h1>
      <div style={{ marginBottom: '20px' }}>
        <label>Introduzca la temperatura en grados Celsius:</label>
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          style={{ marginLeft: '10px', padding: '5px', width: '150px' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label>Ingrese la temperatura en Fahrenheit:</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          style={{ marginLeft: '10px', padding: '5px', width: '150px' }}
        />
      </div>
    </div>
  );
}

export default TemperatureConverter;



