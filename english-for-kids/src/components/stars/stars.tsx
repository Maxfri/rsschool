import React from 'react';

interface Props {
  stars: string[]
}
function Stars({ stars }: Props): JSX.Element {
  let starNumber = 0;
  return (
    <div className="game-score rating">
      {stars.map((star): JSX.Element => {
        starNumber += 1;
        if (star === 'wrong') {
          return <div className="star-error" key={`star${starNumber}`} />;
        } if (star === 'right') {
          return <div className="star-succes" key={`star${starNumber}`} />;
        }
        return null;
      })}
    </div>
  );
}

export default Stars;
