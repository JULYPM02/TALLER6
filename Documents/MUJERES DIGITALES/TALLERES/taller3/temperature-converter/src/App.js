import React from 'react';
import './App.css'; 
import TemperatureConverter from './components/TemperatureConverter';
import mainImage from './Image/termometro.jpg';

function App() {
  return (
    <div className="App">
      <h1 style={{ whiteSpace: 'nowrap' }}></h1>
      <TemperatureConverter width={400} height={400} onResize={(event, {element, size}) => {
        }} />
      
      <header className="App-header">
        <img src={mainImage} alt="Temperaturas" style={{ width: '50%', height: 'auto', borderRadius: '20px' }} />
        </header>
    </div>

     
  );
}

export default App;

