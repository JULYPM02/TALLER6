import React from 'react';
import ImageItem from './ImageItem';

function Gallery({ images }) {
  return (
    <div className="gallery">
      {images.map(image => (
        <ImageItem key={image.id} image={image} />
      ))}
    </div>
  );
}

export default Gallery;
