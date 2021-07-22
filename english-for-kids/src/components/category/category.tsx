import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './category.css';

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
      {/* <div class="card-body admin-category__body">
        <button type="button" class="close admin-category__cross" aria-label="Close">
          <span aria-hidden="true">?</span>
        </button>
        <h3>Fruits</h3>
        <p>WORDS: 8</p>
        <div class="row admin-category__buttons">
          <button type="button" class="btn btn-outline-success">Update</button>
          <button type="button" class="btn btn-outline-success">Words</button>
        </div>
      </div> */}
    </article>
  );
}

export default withRouter(Category);
