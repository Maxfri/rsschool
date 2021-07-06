import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../category/category';

function CategoryList({ categories }: any) {
  return (
    <>
      {categories.map((category) => (
        <Link
          to={{
            pathname: '/category',
            state: { data: category.id },
          }}
          key={category.id}
        >
          <Category category={category} key={category.id} />
        </Link>
      ))}
    </>
  );
}

export default CategoryList;
