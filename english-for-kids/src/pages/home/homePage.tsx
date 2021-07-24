import React, { useState } from 'react';
import cardsData from '../../components/cards/CardsData';
import CategoryList from '../../components/categoryList/categoryList';

function HomePage(): JSX.Element {
  const [categories, setCategories] = useState(cardsData[0]);

  return (
    <section className="main-section">
      <h2>Home</h2>
      <CategoryList categories={categories} setCategories={setCategories} />
    </section>
  );
}

export default HomePage;
