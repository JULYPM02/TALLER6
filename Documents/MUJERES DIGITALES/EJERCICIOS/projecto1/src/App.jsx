import React from 'react';
import Gallery from './Gallery';

function App() {
  const images = [
    { id: 1, url: 'https://via.placeholder.com/300', title: 'Imagen 1' },
    { id: 2, url: 'https://via.placeholder.com/300', title: 'Imagen 2' },
    { id: 3, url: 'https://via.placeholder.com/300', title: 'Imagen 3' },
    { id: 4, url: 'https://via.placeholder.com/300', title: 'Imagen 4' },
  ];

  return (
    <div className="App">
      <h1>Galería de Imágenes</h1>
      <Gallery images={images} />
    </div>
  );
}

export default App;

