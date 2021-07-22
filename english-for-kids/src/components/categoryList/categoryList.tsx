import React, { useState } from 'react';
import Category from '../category/category';
import AddCategory from '../addCategory/addCategory';

function CategoryList({ categories, mode }: any) {
  const [addCategory, setAddCategory] = useState(categories)
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
      <AddCategory category={addCategory} setCategory={setAddCategory} />
      {
        addCategory.map((category) => (
          <Category category={category} key={category.id} />
        ))
      }
    </main>
  );

}

export default CategoryList;
