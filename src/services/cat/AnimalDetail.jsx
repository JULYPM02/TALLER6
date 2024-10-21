import React from 'react';

const CatDetail = ({ cat, closeModal }) => {
  return (
    <div className="modal">
      <h2>{cat.name}</h2>
      <img src={cat.image.url} alt={cat.name} />
      <p>Breed: {cat.breed}</p>
      <p>Age: {cat.age}</p>
      <p>Size: {cat.size}</p>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default CatDetail;
