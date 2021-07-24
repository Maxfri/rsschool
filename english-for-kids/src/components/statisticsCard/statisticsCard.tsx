import React from 'react';

interface Props {
  card: any;
}

function StatisticsCard({ card }: Props): JSX.Element {
  return (
    <div className="statistics-cards">
      <div className="statistics-cards-word">
        {card.word}
      </div>
      <div className="statistics-cards-translation">
        {card.translation}
      </div>
      <div className="statistics-cards-click">
        clicks:
      </div>
      <div className="statistics-cards-right">
        right-click:
      </div>
      <div className="statistics-cards">
        wrong-click:
      </div>
      <div className="statistics-cards">
        percent:
      </div>
    </div>
  );
}

export default StatisticsCard;
