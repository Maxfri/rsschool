import React from 'react';
import { Link } from 'react-router-dom';
import './category.css';

function Category({ category }: any): JSX.Element {
  return (
    <Link
      to={{
        pathname: `/category${category.id}`,
        // state: { data: category.id },
      }}
      key={category.id}
    >
      <article
        key={category}
        className="category"
      >
        <img className="img" src={category.image} alt="Category" />
        <div className="category-body">
          <p className="category-text">
            {category.title}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default Category;
