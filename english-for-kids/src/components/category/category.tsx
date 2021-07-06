import React from 'react';
import './category.css';

function Category({ category }: any): JSX.Element {
  return (
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
  );
}

export default Category;
