import React from 'react';

const DogDetail = ({ dog, closeModal }) => {
  return (
    <div className="modal">
      <h2>{dog.name}</h2>
      <img src={dog.image.url} alt={dog.name} />
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
      <p>Size: {dog.size}</p>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default DogDetail;
