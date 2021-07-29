import React from 'react';
import Category from '../category/category';
import { Category as CardsCategory } from '../../interface/interface';

interface Props {
  categories: CardsCategory[],
}

function CategoryList({ categories }: Props): JSX.Element {
  return (
    <main className="grid-wrapper">
      {categories.map((category): JSX.Element => (
        <Category category={category} key={category.id} />
      ))}
    </main>
  );
}

export default CategoryList;
