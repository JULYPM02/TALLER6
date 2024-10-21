import React from 'react';

function ImageItem({ image }) {
  return (
    <div className="image-item">
      <img src={image.url} alt={image.title} />
      <p>{image.title}</p>
    </div>
  );
}

export default ImageItem;
