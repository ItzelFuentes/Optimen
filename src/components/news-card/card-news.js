import React, { useState } from 'react';

function Card({ image, title, info }) {
    
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="card" onClick={toggleInfo}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      {showInfo && <p>{info}</p>}
    </div>
  );
}

export default Card;
