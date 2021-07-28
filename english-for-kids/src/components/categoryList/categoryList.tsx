import React from 'react';
import Category from '../category/category';

interface CardsCategory {
  id: number;
  title: string;
  image: string;
}
interface Props {
  categories: CardsCategory[],
  setCategories: React.Dispatch<React.SetStateAction<CardsCategory[]>>
}

function CategoryList({ categories, setCategories }: Props): JSX.Element {
  return (
    <main className="grid-wrapper">
      {categories.map((category): JSX.Element => (
        <Category category={category} key={category.id} />
      ))}
    </main>
  );
}

export default CategoryList;
