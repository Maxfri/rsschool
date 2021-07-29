import React from 'react';

interface Cards {
  word: string,
  translation: string,
  image: string,
  audioSrc: string,
  clicks: string,
  rightClick: string,
  wrongClick: string,
  percent: string
}
interface Props {
  card: Cards
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
        {card.clicks}
      </div>
      <div className="statistics-cards-right">
        right-click:
        {card.rightClick}
      </div>
      <div className="statistics-cards">
        wrong-click:
        {card.wrongClick}
      </div>
      <div className="statistics-cards">
        percent:
        {card.percent}
      </div>
    </div>
  );
}

export default StatisticsCard;
