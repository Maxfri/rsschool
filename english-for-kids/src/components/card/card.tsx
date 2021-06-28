import React, { Component } from 'react';
// import '../card/card.css';

function Card(): JSX.Element {
  return (
    <>
      <div className="card">
        <img className="img" src="../src/assets/img/image7.png" alt="Card image" />
        <div className="card-body">
          <p className="card-text"></p>
          <img className="card-flip" src="../src/assets/img/cached_black.png" alt="Card flip" />
        </div>
      </div>
    </>
  )
}

export default Card;