import React, { useState } from 'react';
import cardsCategory from '../../components/cards/cardsCategoryData';
import CategoryList from '../../components/categoryList/categoryList';

function HomePage(): JSX.Element {
  const [categories, setCategories] = useState(cardsCategory);

  return (
    <section className="main-section">
      <h2>Home</h2>
      <CategoryList categories={categories} setCategories={setCategories} />
    </section>
  );
}

export default HomePage;
