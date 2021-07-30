import React, { useState } from 'react';
import Category from '../category/category';
import AddCategory from '../addCategory/addCategory';
import CategoryAdmin from '../categoryAdmin/categoryAdmin';
import { Category as CardsCategory } from '../../interface/interface';

interface Props {
  categories: CardsCategory[],
  mode?: string
}

function CategoryList({ categories, mode }: Props): JSX.Element {
  const [allCategories, setAllCategories] = useState(categories);
  if (mode !== 'admin') {
    return (
      <main className="grid-wrapper">
        {
          categories.map((category) => (
            <Category category={category} key={category.id} />
          ))
        }
      </main>
    );
  }
  return (
    <main className="grid-wrapper">
      <AddCategory category={allCategories} setCategory={setAllCategories} />
      {
        allCategories.map((category) => (
          <CategoryAdmin
            category={category}
            key={category.id}
            allCategories={allCategories}
            setAllCategories={setAllCategories}
          />
        ))
      }
    </main>
  );
}

CategoryList.defaultProps = {
  mode: '',
};
export default CategoryList;
