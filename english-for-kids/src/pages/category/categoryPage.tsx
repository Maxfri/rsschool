import React, { useState } from 'react';
import CardList from '../../components/cardList/cardList';
import cardsData from '../../components/cards/CardsData';

function CategoryPage(props: any):JSX.Element {
  const [cards, setCards] = useState(cardsData);
  const [number, setNumber] = useState(props.id);

  // let NUMBER_OF_CATEGORY: number = location.state.data;
  
  // console.log(location);
  // console.log(props);
  // if (location.state !== undefined) {


  //     setNumber(location.state.data);
  // }  
  // console.log(number);

  return (
    <div>
      <h2>Category</h2>
      <CardList cards={cards[number]} key={number} />
    </div>
  );
}

export default CategoryPage;
