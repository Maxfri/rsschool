import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Category as CardsCategory } from '../../interface/interface';
import './category.css';

interface Props extends RouteComponentProps<string> {
  category: CardsCategory,
}
function Category({ category, history }: Props): JSX.Element {
  const CATEGORY_LINK = `category/${category.id}`;

  return (
    <article
      key={category.title}
      className="category"
      onClick={() => history.push(CATEGORY_LINK)}
      onKeyDown={() => history.push(CATEGORY_LINK)}
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
