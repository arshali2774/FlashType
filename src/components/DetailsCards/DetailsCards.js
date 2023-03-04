import React from 'react';
import './DetailsCards.css';

const DetailsCards = ({ cardName, cardValue }) => {
  return (
    <div className="details-card-cont">
      <div className="card-name">{cardName}</div>
      <div className="card-value">{cardValue}</div>
    </div>
  );
};

export default DetailsCards;
