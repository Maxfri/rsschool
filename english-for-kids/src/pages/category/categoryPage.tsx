import React, { useState } from 'react';
import CardList from '../../components/cardList/cardList';
import cardsData from '../../components/cards/CardsData';

function CategoryPage({ mode, setMode }): JSX.Element {
  // const [cards, setCards] = useState(cardsData);
  // const [number, setNumber] = useState(props.id);

  return (
    <div>
      <h2>Category</h2>
      <CardList mode={mode} setMode={setMode} />
    </div>
  );
}

export default CategoryPage;
