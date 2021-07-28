import React from 'react';

interface Props {
  stars: string[]
}
function Stars({ stars }: Props): JSX.Element {
  return (
    <div className="game-score rating">
      {stars.map((star): JSX.Element => {
        if (star === 'wrong') {
          return <div className="star-error" />;
        } if (star === 'right') {
          return <div className="star-succes" />;
        }
        return null;
      })}
    </div>
  );
}

export default Stars;
