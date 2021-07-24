import React from 'react';
import Category from '../category/category';

interface Props {
  categories: any,
  setCategories: any
}

function CategoryList({ categories, setCategories }: Props): JSX.Element {
  return (
    <main className="grid-wrapper">
      {categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </main>
  );
}

export default CategoryList;
