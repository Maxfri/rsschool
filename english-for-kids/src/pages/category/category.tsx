import React, { useState } from 'react';
import CardList from '../../components/cardList/cardList';
import cardsData from '../../components/cards/CardsData';

function PageCategory({ location }: any):JSX.Element {
  const [cards] = useState(cardsData);
  const NUMBER_OF_CATEGORY: number = location.state.data;

  return (
    <div>
      <h2>Category</h2>
      <CardList cards={cards[NUMBER_OF_CATEGORY]} key={NUMBER_OF_CATEGORY} />
    </div>
  );
}

export default PageCategory;
