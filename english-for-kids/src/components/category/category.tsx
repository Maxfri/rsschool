import React from 'react';
import { withRouter } from 'react-router-dom';
import './category.css';

interface Props {
  category: any,
  history: any
}

function Category({ category, history }: any): JSX.Element {
  return (
    <article
      key={category}
      className="category"
      onClick={() => history.push(`category/${category.id}`)}
      onKeyDown={() => history.push(`category/${category.id}`)}
      role="presentation"
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

export default withRouter(Category);
