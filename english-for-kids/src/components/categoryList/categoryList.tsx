import React from 'react';
import Category from '../category/category';

function CategoryList({ categories }: any) {
  return (
    <main className="grid-wrapper">
      {categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </main>
  );
}

export default CategoryList;
