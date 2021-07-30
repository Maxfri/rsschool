import React, { useState } from 'react';
import cardsCategory from '../../components/cards/cardsCategoryData';
import CategoryList from '../../components/categoryList/categoryList';

function HomePage(): JSX.Element {
  const [categories] = useState(cardsCategory);

  return (
    <section className="main-section">
      <h2>Home</h2>
      <CategoryList categories={categories} />
    </section>
  );
}

export default HomePage;
