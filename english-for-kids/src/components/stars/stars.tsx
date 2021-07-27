import React from 'react';

function Stars({stars}) {
  // const starError = document.createElement('div');
  // starError.classList.add('star-error');
  // gameScore.appendChild(starError);
  // const starSucces = document.createElement('div');
  //     starSucces.classList.add('star-succes');
  //     gameScore.appendChild(starSucces);
  return (
    <div className="game-score rating">
      {stars.map((star) => {
      console.log(star);
        if (star === 'wrong') {
          return <div className="star-error"></div>
        } else if (star == 'right') {
          return <div className="star-succes"></div>
        }
      })}
    </div>
  );
}

export default Stars;
