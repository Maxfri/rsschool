import React from 'react';
// import { History } from 'history';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './category.css';

interface CardsCategory {
  id: number,
  title: string,
  image: string,
}

interface Props extends RouteComponentProps<string> {
  category: CardsCategory,
}

function Category({ category, history }: Props): JSX.Element {
  return (
    <article
      key={category.title}
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
